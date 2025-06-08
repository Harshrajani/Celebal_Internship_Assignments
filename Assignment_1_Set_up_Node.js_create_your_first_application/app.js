import { createServer } from 'node:http';
import { readFile } from 'node:fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  readFile("index.html", (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Error: File not found");
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
