const express = require('express');
const cors = require("cors")
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config({path:'./config/config.env'})
const DB_NAME = "exam"

// Middlware
app.use(cors({credentials: true, origin: 'http://localhost:3000'}), express.json() , express.urlencoded({extended:true}));
app.use(cookieParser());

// Connecting to DB
require('./config/mongoose.config')(DB_NAME)


// Routes
require('./routes/user.routes')(app)







app.listen(process.env.PORT,()=>{
    console.log(`Server is Running at ${process.env.PORT}`);
})