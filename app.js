

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
})
// divide

app.post("/bmicalculator", function(req, res){

  var weight = Number(req.body.n1);
  var height = Number(req.body.n2);

  var result = Math.floor((weight) / (height*height))
  res.send("Your BMI is " + result);
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.listen(port, function(){
  console.log("Server started on port 4000");
});
