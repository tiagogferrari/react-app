const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.myanimelist.net',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v2', // reescreve /api para /v2
      },
    })
  );
};
