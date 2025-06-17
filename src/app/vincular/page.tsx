"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

interface AdAccount {
  id: string;
  name: string;
  account_id: string;
}

export default function VincularPage() {
  const { data: session, status } = useSession();
  const [adAccounts, setAdAccounts] = useState<AdAccount[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated" && session?.accessToken) {
      setLoading(true);
      fetch("/api/fb/adaccounts")
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            setError(data.error.message || "Erro ao buscar contas de anúncios");
          } else if (data.data && Array.isArray(data.data)) {
            setAdAccounts(data.data);
          }
        })
        .catch(() => {
          setError("Falha ao conectar com a API do Facebook");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [session, status]);

  const generateBusinessLink = (adAccountId: string) => {
    const cleanId = adAccountId.startsWith("act_") 
      ? adAccountId.substring(4) 
      : adAccountId;
    return `https://business.facebook.com/settings/ad-accounts/act_${cleanId}/users`;
  };

  if (status === "loading") {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (status === "unauthenticated") {
    return (
      <div className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Vincular Conta de Anúncios</h1>
        <p className="mb-4">Para vincular sua conta de anúncios, faça login com o Facebook.</p>
        <button
          onClick={() => signIn("facebook")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Entrar com Facebook
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vincular Conta de Anúncios</h1>
        <button
          onClick={() => signOut()}
          className="text-sm text-gray-500"
        >
          Sair
        </button>
      </div>

      {loading ? (
        <div className="text-center py-4">Buscando suas contas de anúncios...</div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
          <p>{error}</p>
        </div>
      ) : adAccounts.length > 0 ? (
        <div>
          <h2 className="font-medium mb-4">
            Olá {session?.user?.name}, detectamos sua(s) conta(s) de anúncios:
          </h2>
          
          {adAccounts.map((account) => (
            <div key={account.id} className="border rounded p-4 mb-4">
              <p className="font-medium">{account.name}</p>
              <p className="text-sm text-gray-500 mb-3">ID: {account.account_id || account.id}</p>
              
              <a
                href={generateBusinessLink(account.account_id || account.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white text-center px-4 py-2 rounded mb-3"
              >
                Clique aqui para me dar acesso
              </a>
              
              <div className="bg-gray-50 p-3 rounded">
                <h3 className="font-medium mb-2">Instruções:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Na próxima tela, clique em <strong>Adicionar Pessoa</strong></li>
                  <li>Digite: <strong>contato@minhaempresa.com</strong></li>
                  <li>Marque: <strong>Administrador (todas as permissões)</strong></li>
                  <li>Clique em <strong>Concluir</strong></li>
                </ol>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded">
          <p>Não encontramos nenhuma conta de anúncios vinculada ao seu perfil.</p>
        </div>
      )}
    </div>
  );
}