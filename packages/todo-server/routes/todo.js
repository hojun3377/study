const todo = (router, db) => {
  const r = router;

  r.get('/todo', (req, res) => {
    const sql = 'SELECT * FROM todo';

    db.query(sql, (error, rows) => {
      if (error) throw error;

      console.log(`The rows: ${rows}`);

      res.send(rows);
    });
  });

  return r;
};

export default todo;
