const { name } = require("ejs");
const express = require("express");
const app = express();
const https = require("https");
const date = require(__dirname + "/views/date.js");

// console.log(date()) ; // this gives date.js export and activate it by running using "()" function 

var todoTasks = [];
var tTask = [];
app.set('view engine', 'ejs'); // for ejs

app.use(express.urlencoded({ extended: true })); // use to catch input data from the webpage
app.use(express.static('public'));


app.get("/", function (req, res) {
  //res.sendFile(__dirname+"/index.html");
  //var weeks= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  //var wkDay= weeks[todayDate.getDay()];// gives the no of the week but with weeks i will give name of day 

  console.log(date);
  var da = date.getdate();
  res.render("Mainlists", { weekDay: da, todo: todoTasks, taskName: "To-do list" });
  res.send();
});

app.post("/", function (req, res) {
  if (req.body.butto === "Work list") {
    tTask.push(req.body.tasks);
    res.redirect("/work");
  } else {
    todoTasks.push(req.body.tasks);
    res.redirect("/");
  }
  // res.render("lists",{ task:task}) this will crash, as its already rendered before but without task:tasks 
});

app.get("/work", function (req, res) {
  var fa = date.getBday();
  res.render("Mainlists", { weekDay: fa, todo: tTask, taskName: "Work list" }); // i have leave weekday empty bcauz i have to make new date var as above or make it outside the f/n
});

app.post("/work", function (req, res) {

  res.redirect("/work");

});

app.get("/about", function (req, res) {
  res.render("about");
})
app.listen(5000, function () {
  console.log("server is running on 5000");
});
