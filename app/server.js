import Application from './index';
import server from 'arch-next/server';

const AppServer = server(Application);

AppServer.listen(3000);
