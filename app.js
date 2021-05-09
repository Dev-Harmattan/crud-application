const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const app = express();

const dbUrl = `${process.env.DB_URL}`
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
  if(err){
    console.error(err)
  }else{
    console.log('Database connected');
  }
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome \n Now proceed to create User'});
});
app.use('/user', userRoutes);




app.listen(process.env.PORT || 5000, () => {
  console.log(`App running at port: 3000`)
});



