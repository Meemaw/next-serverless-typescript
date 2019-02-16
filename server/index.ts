import express from 'express';
import next from 'next';

const __DEV__ = process.env.NODE_ENV !== 'production';
const PORT = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev: __DEV__ });
const handle = app.getRequestHandler();

function createServer() {
  const server = express();
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  return server;
}

const server = createServer();

if (!process.env.IN_LAMBDA) {
  app.prepare().then(() => {
    server.listen(3000, (err: Error) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  });
}

export default server;
