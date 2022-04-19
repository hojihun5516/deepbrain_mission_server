require('dotenv').config();
const express = require('express');
const app = express();
const { PORT } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log('***************** ***************** *****************');
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********');
  console.log('***************** ***************** *****************');
});
app.get('/', (req, res) => {
  res.json({ data: 'It is root' });
});
