export { default } from "next-auth/middleware";

// Não estamos protegendo nenhuma rota específica por enquanto
export const config = {
  matcher: [],
};