require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/authentication.js");

//db connection 
mongoose
    .connect(process.env.DATABASE, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,   //keep database alive
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB CONNECTED....");
    })
    .catch(
        console.log(" OOPS..!! DATABSE NOT connected")
    );
//      ................#    MIDDLE WARES    #........................
//body-parser is the common middle ware its available on npm.js to read.it handles the request from the frontend. 
// cookie-parser.  it handles teh header and populates a request.cookie. that is if you want to get cookie or set to cokkie put something with the cookie we use cookier parser.
// cors = cross origion resource sharing. its he mechanism that allows the restricted resources on the webpage to be requested from another domain outside the domain from where the first resource was served. 

app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());

// my routes

app.use("/api", authRoutes);


//port
const port = process.env.PORT || 8000;

//Starting server
app.listen(port, () => {
    console.log(`app is running  at ${port}`);
 
});