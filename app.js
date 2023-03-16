const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  // Render the appropriate template based on the request URL
  if (req.url === '/') {
    const data = {
      title: 'My App',
      message: 'This is the home page.'
    };
    ejs.renderFile('views/index.html', data, (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        console.error(err);
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    });
  } else if (req.url === '/about') {
    const data = {
      title: 'About Us',
      message: 'We are a company that does stuff.'
    };
    ejs.renderFile('views/about.html', data, (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        console.error(err);
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
