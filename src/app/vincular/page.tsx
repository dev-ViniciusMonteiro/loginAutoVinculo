"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function VincularPage() {
  const { data: session, status } = useSession();
  const [adAccountId, setAdAccountId] = useState("");

  const handleFacebookLogin = () => {
    signIn("facebook", { 
      callbackUrl: "/vincular",
      scope: "email,public_profile" 
    });
  };

  const generateBusinessLink = (adAccountId: string) => {
    // Remove 'act_' prefix if present
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
          onClick={handleFacebookLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Entrar com Facebook
        </button>
        <p className="mt-6 text-sm text-gray-500">
          Ao fazer login, você concorda com nossa{" "}
          <Link href="/politicas" className="text-blue-600 hover:underline">
            Política de Privacidade
          </Link>
        </p>
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

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="font-medium mb-4">
          Olá {session?.user?.name}, vamos vincular sua conta de anúncios:
        </h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Digite o ID da sua conta de anúncios:
          </label>
          <div className="flex">
            <input
              type="text"
              value={adAccountId}
              onChange={(e) => setAdAccountId(e.target.value)}
              placeholder="Ex: 123456789 ou act_123456789"
              className="flex-1 border rounded-l px-3 py-2"
            />
            <a
              href={adAccountId ? generateBusinessLink(adAccountId) : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-blue-600 text-white px-4 py-2 rounded-r ${!adAccountId && "opacity-50 cursor-not-allowed"}`}
              onClick={(e) => !adAccountId && e.preventDefault()}
            >
              Acessar
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Você pode encontrar o ID da sua conta de anúncios no Gerenciador de Anúncios do Facebook.
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium mb-2">Como encontrar o ID da sua conta:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Acesse o <a href="https://business.facebook.com/adsmanager" target="_blank" rel="noopener noreferrer" className="text-blue-600">Gerenciador de Anúncios</a></li>
            <li>No menu superior, clique no nome da sua conta</li>
            <li>Você verá o ID da conta no formato &ldquo;act_123456789&rdquo;</li>
            <li>Digite esse número (com ou sem o prefixo &ldquo;act_&rdquo;) no campo acima</li>
          </ol>
        </div>
        
        {adAccountId && (
          <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
            <h3 className="font-medium mb-2">Instruções após clicar em "Acessar":</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Na próxima tela, clique em <strong>Adicionar Pessoa</strong></li>
              <li>Digite: <strong>contato@minhaempresa.com</strong></li>
              <li>Marque: <strong>Administrador (todas as permissões)</strong></li>
              <li>Clique em <strong>Concluir</strong></li>
            </ol>
          </div>
        )}
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <Link href="/politicas" className="text-sm text-gray-500 hover:text-gray-700">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </div>
  );
}