const express = require("express");
const app = express();
const userRouter = require("./server/routes/routes");
const path = require("path");
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')


app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "views"));

console.log("dirname:", __dirname);
app.set("view engine", "ejs");
//middleware
app.use(bodyParser.urlencoded({extended: true}))

//Routes

app.use('/',userRouter)



// console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

app.listen(() => {
  console.log(`Server is started`);
});
