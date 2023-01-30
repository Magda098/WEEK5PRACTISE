//requiring packages
const express = require('express');
const mongoose = require('mongoose');
require('dotenv')=constant();

// Create an express app,Initialize express
const app = express();

// Define the port number
const port = process.env.PORT || 3000;
const databaseUrl =process.env.DATABASE_URL ||'';

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
