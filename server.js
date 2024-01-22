const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  console.log('receive request', req);
  res.writeHead(302, {
    // 设置 Location 头部，重定向到的 URL
    Location: 'https://www.baidu.com',
  });
  // 结束响应
  res.end();
});

// 服务器开始监听
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
