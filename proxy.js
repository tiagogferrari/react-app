// Importing the http-proxy-middleware package
const { createProxyMiddleware } = require('http-proxy-middleware');

// Creating the proxy middleware
const proxy = createProxyMiddleware({
  target: 'https://api.myanimelist.net',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/v2'
  }
});

module.exports = (req, res) => {
  // Invoke the proxy middleware
  proxy(req, res);
};
