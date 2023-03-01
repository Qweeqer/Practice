const http = require('http');
const https = require('https');
const url = require('url');

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const remoteUrl = reqUrl.query.url;
  if (!remoteUrl) {
    res.statusCode = 400;
    res.end('Missing required parameter: url');
    return;
  }
  https.get(remoteUrl, remoteRes => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5505');
    remoteRes.pipe(res);
  });
});

server.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
