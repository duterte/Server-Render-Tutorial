import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from './src/components/app';
import config from './config';
import axios from 'axios';

function serverRender() {
  return axios.get(`${config.serverUrl}/api/contests`).then((res) => {
    console.log(res.data);
    return ReactDomServer.renderToString(
      // initialContests={res.data.contests}
      <App initialContests={res.data.contests} />
    );
  });
}
export default serverRender;
