var readlineSync = require('readline-sync');
var chalk = require('chalk');

let score = 0;
let superheroQuiz =console.log("Welcome To SuperHero Quiz ");
console.log("-------------------------");

let questionaire = [
  questionOne = {
    question: "Which superhero used to be a Russian spy? ",
    answer: "Black Widow"
  },
  questioneTwo = {
    question: "What was Harley Quinn's job before she became a super villain? ",
    answer: "Therapist"
  },
  questionThree = {
    question: "Who is Wanda aka Scarlet Witch's brother? ",
    answer: "QuickSilver"
  },
  questionFour={
    question: "Where is Nakia from? ",
  answer: "Wakanda"
  },
  questionFive={
    question: "The Man of Steel is another name for which superhero? ",
  answer: "superman"
  }
]



  console.log("SuperHero")
  let name = chalk.blue( readlineSync.question("What is your name "));
  for(let i=0;i<questionaire.length;i++){
    superHeroGame(questionaire[i].question, questionaire[i].answer);
  }
  
function superHeroGame(question, answer){
  var reply = readlineSync.question(chalk.green(question));
  if(reply === answer){
    console.log("Right!!");
    score++;
  }
  else{
    console.log("Wrong!");
    score--;
  }
}

console.log("Your Score is", score);