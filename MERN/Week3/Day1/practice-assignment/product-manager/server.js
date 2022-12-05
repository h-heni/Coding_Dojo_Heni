const express = require('express')
const cors = require('cors') // This is new
const app = express()
app.use(cors()) // This is new
const PORT= process.env.PORT || 8000


// Config
require('./server/config/mongoose.config')

// midlware
app.use(express.json(), express.urlencoded({ extended: true }));

// Route
const AllMyUserRoutes = require("./server/routes/product.routes");
AllMyUserRoutes(app);







app.listen(PORT, ()=>console.log('7ill l beb...'))
