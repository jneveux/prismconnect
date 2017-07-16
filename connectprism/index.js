/**
 * Created by jean on 7/16/17.
 */
var prism = require('connect-prism');

prismMode = 'proxy';

prism.create({
  name: 'serve',
  mode: prismMode,
  context: '/api',
  host: 'localhost',
  port: 9090,
  delay: 'auto',
  rewrite: {
    '^/api/': '/api/',
  },
  proxyConfig: {
    options: {
      target: 'http://localhost:3000', // absolute URL as defined by config https, host, port, and context, override at your own risk
      xfwd: false, // don't add x-forward headers
      secure: false, // don't verify SSL certs
      prependPath: false // don't prepend path to target context when proxying
    },
    onProxyCreated: function (q,a) {}
  }
});

