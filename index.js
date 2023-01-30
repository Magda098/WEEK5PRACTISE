//requiring packages
const express = require('express');
const mongoose = require('mongoose');
require('dotenv')=constant();

// Define the port number
const port = process.env.PORT || 3000;
const databaseUrl =process.env.DATABASE_URL ||'';

// Create an express app,Initialize express
const app = express();

//Connecting to the database
const database=mongoose.connection;//initialize a mongoose connection
//create a listener to the db
database.on('error',(error)=>{
    console.error(error);
})


app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
