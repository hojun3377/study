import mariadb from 'mysql';

import config from '../config.js';

const conn = mariadb.createConnection(config);

export default conn;
