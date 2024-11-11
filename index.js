const express = require('express');
const nekretnineRouter = require('./Rute/nekretnine'); 
const ponudeRouter = require('./Rute/ponude');  

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/nekretnine', nekretnineRouter); 
app.use('/ponude', ponudeRouter);  

app.listen(PORT, (error) => {
  if (error) {
    console.error(`greška: ${error.message}`);
  } else {
    console.log(`server "dela" na: http://localhost:${PORT}`);
  }
});

