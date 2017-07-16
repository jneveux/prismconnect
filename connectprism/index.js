var httpProxy = require('http-proxy');

var options = {
  "target": "http://localhost:3000",
  "secure": false
};


var proxy = httpProxy.createProxyServer(options); // See (†)

proxy.on('proxyRes', function (proxyRes, req, res) {

  // collect response data
  var proxyResData='';
  proxyRes.on('data', function (chunk) {
    proxyResData +=chunk;
  });
  proxyRes.on('end',function () {

    var snifferData =
      {
        request:{
          data:req.body,
          headers:req.headers,
          url:req.url,
          method:req.method},
        response:{
          data:proxyResData,
          headers:proxyRes.headers,
          statusCode:proxyRes.statusCode}
      };
    console.log(snifferData.response.data);
  });
});

proxy.listen(3001);


