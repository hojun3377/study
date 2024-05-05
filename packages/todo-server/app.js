import express from 'express';

import mariadb from './db/connect/mariadb.js';
import check, { argument } from './utils/check.js';
import todo from './routes/todo.js';

const { port } = check(
  argument(process.argv, err => {
    if (err) throw new Error(err);
  })
);

const server = express();
const db = mariadb;

db.connect(err => {
  if (err) console.error(`error db connecting: ${err.stack}`);

  console.log(`connected as id ${db.threadId}`);
});

server.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

server.use(todo(express.Router(), db));
