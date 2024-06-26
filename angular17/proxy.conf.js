const PROXY_CONFIG = [
    {
      context: ['/ramp_it_war/api1', '/api1'], // Added '/ramp_it_war/api'
      // target: 'https://d538-109-160-22-106.ngrok-free.app',
      // target: 'https://25ee-2603-7000-3803-f27-d8f0-228a-9773-4d22.ngrok-free.app/',
      // target:'https://65ea-72-28-211-44.ngrok-free.app',
      // target:'https://8717-109-160-19-18.ngrok-free.app',
      target:'https://95b5-109-160-19-68.ngrok-free.app',
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
      cookieDomainRewrite: "localhost",
      onProxyRes: function(proxyRes, req, res) {
        Object.keys(proxyRes.headers).forEach(function (key) {
          res.append(key, proxyRes.headers[key]);
        });
      },
  
      // onProxyReq: function(proxyReq, req, res) {
      //   proxyReq.setHeader('Origin', 'https://d538-109-160-22-106.ngrok-free.app');
      //   if (req.headers['authorization']) {
      //     proxyReq.setHeader('Authorization', req.headers['authorization']);
      //   }
      // },
      bypass: function(req, res, proxyOptions) {
        if (req.method === 'OPTIONS') {
          res.writeHead(200);
          res.end();
          return true; // Intercept OPTIONS method
        }
      }
    },
    {
      // Handle the login page separately to ensure direct access
      context: ['/ramp_it_war/login'],
      // target: 'https://d538-109-160-22-106.ngrok-free.app',
      // target: 'https://25ee-2603-7000-3803-f27-d8f0-228a-9773-4d22.ngrok-free.app/',
      // target:'https://8717-109-160-19-18.ngrok-free.app',
      target:'https://95b5-109-160-19-68.ngrok-free.app',
      secure: false, // Set to true if your target is using HTTPS
      changeOrigin: true,
      logLevel: "debug",
      pathRewrite: {
        '^/ramp_it_war/login': '/ramp_it_war/login'
      },
      onProxyReq: function(proxyReq, req, res) {
        // proxyReq.setHeader('Origin', 'https://d538-109-160-22-106.ngrok-free.app');
        // proxyReq.setHeader('Origin', 'https://25ee-2603-7000-3803-f27-d8f0-228a-9773-4d22.ngrok-free.app/');
        proxyReq.setHeader('Origin', 'https://95b5-109-160-19-68.ngrok-free.app');
      }
    }
  ];
  
  module.exports = PROXY_CONFIG;
  