import noExpress from './no-express/index.js';
import app from './express/index.js';

const argv = process.argv;
const isMoreArgv = argv.length > 3 ? true : false;

if (isMoreArgv) throw new Error('There are too many arguments.');

const options = new Set(['no', 'express']);
const arg = argv.length < 3 ? 'no' : argv[2];

if (!options.has(arg));

switch (arg) {
  case 'no':
    noExpress.listen(8888);
    console.log('no-express server start!');
    break;
  case 'express':
    app.listen(8888);
    console.log('express server start!');
    break;
  default:
    throw new Error('There is no such option.');
}
