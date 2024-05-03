import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('최호준');
});

app.get('/test', (req, res) => {
  res.send('TEST SUCCESS');
});

app.get('/test/1', (req, res) => {
  res.send('One!!');
});

export default app;
