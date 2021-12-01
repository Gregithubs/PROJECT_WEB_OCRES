var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const hostname="localhost"
const port=3001
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.get ('/test', (req,res)=> {
    res.json({
        req: req.method,
        data:"This is a GET"
    })
});
app.put('/test',(req,res)=>{
    res.json({
        req: req.method,
        data:"This is a PUT"
    });
});

app.listen(port,hostname),() =>{
    console.log(`mon serveur fonctionne sur http://${hostname}:${port}\n`);
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
