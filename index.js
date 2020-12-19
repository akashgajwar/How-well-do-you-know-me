var readlineSync = require('readline-sync');
var chalk= require('chalk');
var userName = readlineSync.question(chalk.red("Your name please? "));
console.log(chalk.green("welcome  "+ userName));

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(chalk.blue(question));

  if (userAnswer === answer){
    console.log(chalk.red("You are right"));
    score++;
  }else{
    console.log(chalk.green("Better luck next time!"));
  }

  console.log(chalk.yellow("Your current score is " + score));
}
  


var questions = [{question:"Q1.Who is my fav player? ", answer:"Dhoni"},{
  question:"Q2.Who is my fav Actor ", answer:"Ranbir"},
  {
  question:"Q3.Which is my fav colour? ", answer:"Black"},
  {
  question:"Which is my fav fruit? ", answer:"Pineapple"}
]
for (var i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}
if(score === 4){
  console.log(chalk.green("Youn know me well 👍 "))
}
else{
  console.log(chalk.blue("You need to know me more"))
}
console.log(chalk.red("Welcome Again"));
