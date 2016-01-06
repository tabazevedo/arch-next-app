import Application from './index';
import server from 'arch-next/server';

const options = {
  port: 3000,
  template: '<html><body>{{root}}</body></html>'
}

const app = server(Application, options).start();

export default app;
