const path = require("path");
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const itemRoutes = require("./routes/item");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const emailRoutes = require("./routes/email");


const jwt = require('jwt-simple');
const User = require('./models/User.js');
const auth = require('./auth.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const uri="mongodb+srv://admin:admin@cluster0.ur9hj.mongodb.net/examPrep?retryWrites=true&w=majority"
mongoose
    .connect( uri, { useNewUrlParser: true, useUnifiedTopology: true  }
        //"mongodb://localhost:27017/examPrep", { useNewUrlParser: true, useUnifiedTopology: true  }
    )// pass option { useUnifiedTopology: true } to the MongoClient constructor.
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(express.json({ limit: '50MB' }));
app.use(express.urlencoded({ limit: '50MB', extended: true }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    // res.setHeader(
    //     "Access-Control-Allow-Headers",
    //     "Origin, X-Requested-With, content-type, Accept"
    // );

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, content-type, Accept, Authorization");
    next();
});

app.use("/api/item", itemRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/email", emailRoutes);
app.use('/auth', auth.router);


module.exports = app;
