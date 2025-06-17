export default function PoliticasPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      
      <div className="prose">
        <p className="mb-4">
          Última atualização: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">1. Introdução</h2>
        <p>
          Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos suas informações quando você utiliza nosso serviço de vinculação de contas de anúncios do Facebook.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">2. Informações que Coletamos</h2>
        <p>
          Ao utilizar nosso serviço, coletamos as seguintes informações:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Informações básicas do perfil do Facebook (nome, e-mail, foto de perfil)</li>
          <li>IDs de contas de anúncios que você fornece manualmente</li>
          <li>Tokens de acesso temporários para autenticação</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">3. Como Usamos suas Informações</h2>
        <p>
          Utilizamos suas informações para:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Autenticar sua identidade através do Facebook</li>
          <li>Gerar links personalizados para o Meta Business</li>
          <li>Facilitar o processo de concessão de acesso às suas contas de anúncios</li>
          <li>Melhorar nossos serviços e sua experiência</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">4. Compartilhamento de Dados</h2>
        <p>
          Não compartilhamos suas informações com terceiros, exceto:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Com o Facebook/Meta, para fins de autenticação</li>
          <li>Quando exigido por lei ou ordem judicial</li>
          <li>Para proteger nossos direitos ou propriedade</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">5. Segurança</h2>
        <p>
          Implementamos medidas de segurança para proteger suas informações, incluindo:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Criptografia de dados sensíveis</li>
          <li>Uso de tokens de acesso temporários</li>
          <li>Revisões regulares de segurança</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">6. Seus Direitos</h2>
        <p>
          Você tem o direito de:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Acessar os dados que temos sobre você</li>
          <li>Solicitar a correção de informações imprecisas</li>
          <li>Solicitar a exclusão de seus dados</li>
          <li>Revogar seu consentimento a qualquer momento</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">7. Cookies e Tecnologias Similares</h2>
        <p>
          Utilizamos cookies e tecnologias similares para:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Manter sua sessão ativa</li>
          <li>Lembrar suas preferências</li>
          <li>Analisar o uso do nosso serviço</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">8. Alterações nesta Política</h2>
        <p>
          Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">9. Contato</h2>
        <p>
          Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>E-mail: contato@minhaempresa.com</li>
          <li>Telefone: (00) 0000-0000</li>
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Ao utilizar nosso serviço, você concorda com a coleta e uso de informações de acordo com esta política.
          </p>
        </div>
      </div>
    </div>
  );
}