const PROXY_CONFIG = [
  // {
  //   context: [
  //     '/api',
  //   ],
  //   target: 'http://localhost:3333',
  //   secure: false
  // },

  // {
  //   context: [
  //     '/ruuter/api'
  //   ],
  //   pathRewrite: {
  //     '^/ruuter/api': ''
  //   },
  //   target: 'https://ruuter.arendus.eesti.ee',
  //   changeOrigin: true,
  //   secure: false
  // },
  // {
  //   context: [
  //     '/mail'
  //   ],
  //   target: 'https://rp-jamesproxy-01.dev.riaint.ee:8443', // For local use http://localhost:8010
  //   headers: {
  //     'Connection': 'keep-alive'
  //   },
  //   bypass: (req) => {
  //     delete req.headers['authorization'];
  //   },
  //   secure: false
  // },
  // {
  //   context: [
  //     '/digital-post'
  //   ],
  //   pathRewrite: {
  //     '^/digital-post': '/api/v1'
  //   },
  //   target: 'https://rp-backend-01.dev.riaint.ee:8443',
  //   secure: false
  // },
  // {
  //   context: [
  //     '/digital-container'
  //   ],
  //   pathRewrite: {
  //     '^/digital-container': '/api/v1'
  //   },
  //   target: 'http://localhost:8081',
  //   secure: false
  // },
  // {
  //   context: [
  //     '/digital-container'
  //   ],
  //   pathRewrite: {
  //     '^/digital-container': '/api/v1'
  //   },
  //   target: 'https://rp-document-01.dev.riaint.ee:8443',
  //   secure: false
  // },
  // {
  //   context: [
  //     '/digital-calendar'
  //   ],
  //   pathRewrite: {
  //     '^/digital-calendar': '/api/v1'
  //   },
  //   target: 'https://rp-calendar-01.dev.riaint.ee:8443',
  //   secure: false
  // },

    {
      context: [
        '/api'
      ],
      pathRewrite: {
        '^/api': ''
      },
      target: 'http://localhost:8080',
      secure: false
    }
]

module.exports = PROXY_CONFIG;
