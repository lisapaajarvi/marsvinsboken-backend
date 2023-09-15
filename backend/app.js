const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const cors = require("cors")
const guineaPigRouter = require('./routers/guineaPigRouter');

dotenv.config();

mongoose.connect(process.env.DB_URI, {useNewUrlParser : true
})
.then(() => {
    console.log("Connected to database")
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use("/marsvin", guineaPigRouter)
    app.listen(port, () => console.log(`Listening on port ${port}`
))
})
.catch((error) => {
    console.error(error)
})