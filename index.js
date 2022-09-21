const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  const name = process.env.NAME;
  res.send([
    { id: 1, name },
    { id: 2, name: 'Joseph Prince' },
    { id: 3, name: 'John Smith' },
    { id: 4, name: 'John Wick' },
    { id: 5, name: 'John Cena' },
    { id: 6, name: 'John Snow' },
    { id: 7, name: 'John Wick' },
    { id: 8, name: 'John Cena' },
    { id: 9, name: 'John Snow' },
    { id: 10, name: 'John Wick' },
    { id: 11, name: 'John Cena' },
    { id: 12, name: 'John Snow' },
    { id: 13, name: 'John Wick' },
  ]);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server started on port 8080'));
