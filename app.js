const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();



const app = express();

const dbUrl = `${process.env.DB_URL}`
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(err){
    console.error(err)
  }else{
    const PORT = 3000;
    app.listen(PORT, () => {console.log(`App running at port: ${PORT}`)});
  }
});



