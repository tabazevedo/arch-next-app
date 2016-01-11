import "../bootstrap";
import Application from './index';
import convert from 'koa-convert';
import path from 'path';
import server from 'arch-next/server';
import staticPath from 'koa-static';

const options = {
  port: 3000,
  template: '<html><body>{{root}}<script src="/client.js" type="application/javascript"></script></body></html>'
}

const app = server(Application, options);

app.use(convert(staticPath(path.join(__dirname, "../public"))))
app.start();

export default app;
