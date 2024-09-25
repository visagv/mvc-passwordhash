const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/router1');

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs') //set emplate engine
app.set("views", path.join(__dirname, "views"));


app.use('/', router)
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
