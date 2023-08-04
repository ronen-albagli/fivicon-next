const { createServer } = require('https');
const { parse } = require('url');
const { readFileSync } = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000; // Change this to your desired port number

// SSL Certificate and Key
const httpsOptions = {
  key: readFileSync('./localhost.key'),
  cert: readFileSync('./localhost.crt'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on https://localhost:${port}`);
  });
});