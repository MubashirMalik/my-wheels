const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./server/routes/api');
const port = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, function(){
  console.log(`Server running on port: ${port}`)
});
