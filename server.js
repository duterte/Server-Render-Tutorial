import config from './config';
import express from 'express';
import api from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

const server = express();

server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
  })
);

server.set('view engine', 'ejs');
server.get('/', (req, res) => {
  console.log('request');
  serverRender()
    .then((content) => res.render('index', { content }))
    .catch(console.error);
});

server.use(express.static('public'));
server.use('/api', api);

server.listen(config.port, config.host, () => {
  console.info('server running on port', config.port);
});
