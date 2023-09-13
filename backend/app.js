const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000; 
const dotenv = require("dotenv")
const guineaPigRouter = require("./guineaPigRouter");

dotenv.config();

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to database');
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use("/marsvin", guineaPigRouter);
    app.listen(port, () => console.log(`Listening on port ${port}`));
})
.catch((error)  => {
    console.error(error)
});