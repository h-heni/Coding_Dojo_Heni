const express = require('express')
const app = express()
const PORT= process.env.PORT || 8000


// Config
require('./config/mongoose.config')

// midlware
app.use(express.json(), express.urlencoded({ extended: true }));

// Route
const AllMyUserRoutes = require("./routes/jokes.route");
AllMyUserRoutes(app);







app.listen(PORT, ()=>console.log('7ill l beb...'))
