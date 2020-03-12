const express = require('express');
const next = require('next');
const routes = require('./routes')
const port = parseInt(process.env.PORT, 10) || 1010;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express();
    server.use(handler);

    // server.get('/view', (req, res) => {
    //   return app.render(req, res, `/view/${req.query.id}`);
    // });

    // server.get('/', (req, res) => {
    //     return app.render(req, res, `/`);
    //   });
    
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });