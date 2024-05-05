import { createServer } from './lib/server.js';
import { test } from './lib/requestHandler.js';
import { router, url } from './lib/middlewares/index.js';
import { get } from './lib/method/index.js';

const server = createServer(url(), router(get('/', test)));

export default server;
