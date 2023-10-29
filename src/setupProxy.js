// Importando a função createProxyMiddleware do pacote 'http-proxy-middleware'
const { createProxyMiddleware } = require('http-proxy-middleware');

// Exportando uma função que configura o middleware de proxy
module.exports = function (app) {
  // Usando o middleware de proxy para todas as rotas que começam com '/api'
  app.use(
    '/api',
    createProxyMiddleware({
      // O URL base do servidor para o qual as solicitações serão redirecionadas
      target: 'https://api.myanimelist.net',
      // Configurando o middleware para modificar os headers da solicitação para que pareça que a solicitação originou-se do host de destino
      changeOrigin: true,
      // Reescrevendo o caminho da solicitação: removendo '/api' e adicionando '/v2'
      pathRewrite: {
        '^/api': '/v2', // reescreve /api para /v2
      },
    })
  );
};
