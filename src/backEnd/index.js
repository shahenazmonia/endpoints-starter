const express = require('express');
const app= express();
const router = require('./router');

app.use(express.static('public'));
// app.use(router);


app.listen(8080, ()=>{
  console.log('this project works on port 8080');
});
