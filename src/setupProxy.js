const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.myanimelist.net/v2',
      changeOrigin: true,
    })
  );
};
