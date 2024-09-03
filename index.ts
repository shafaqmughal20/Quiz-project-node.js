#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.bold.cyanBright("*****************-------------------------******************"));
console.log(chalk.bold.green("\n<<<<<<<<<<<<<<<<<<< WELCOME TO QUIZ APP >>>>>>>>>>>>>>>>>>>\n"));
console.log(chalk.bold.blue("*****************-------------------------******************"));



const quiz:{
    question_1:string;
    question_2:string;
    question_3:string;
    question_4:string;
    question_5:string;
    
}= await inquirer.prompt([
    {
    name:"question_1",
    type:"list",
    message:"Q1. \n What is the extension for typescript file\n",
    choices:["abc.js","abc.ts","abc.tsc","abc.npm"]
},

{
    name:"question_2",
    type:"list",
    message:"Q2.\nTypescript is a superset of \n",
    choices:["Java","JavaScript","C#","React"]
},
{
    name:"question_3",
    type:"list",
    message:"Q3.\nWhat null represents in typescript \n ",
    choices:["Absence of value","string","number","boolean"]
},
{
    name:"question_4",
    type:"list",
    message:"Q4.\nHow to write comment in typescript\n ",
    choices:["##","==","//","??"]
},
{
    name:"question_5",
    type:"list",
    message:"Q5.\nWhich of the following is basic data type \n",
    choices:["number","object","array","set"]
}
]);

let score : number=0;

switch(quiz.question_1)
{
    case "abc.ts" :
        console.log(chalk.bold.blueBright("\n1.Correct"));
        ++score;
        break;

        default:
            console.log(chalk.bold.red("\n1.Incrrect!"));
}
            
switch(quiz.question_2)
{
    case "JavaScript" :
        console.log(chalk.bold.blueBright("2.Correct"));
        ++score;
        break;
        
        default:
            console.log(chalk.bold.red("2.Incrrect!"));
}

switch(quiz.question_3)
{
    case "Absence of value" :
        console.log(chalk.bold.blueBright("3.Correct"));
        ++score;
        break;
        
        default:
            console.log(chalk.bold.red("3.Incrrect!"));
}

switch(quiz.question_4)
{
    case "//" :
        console.log(chalk.bold.blueBright("4.Correct"));
        ++score;
        break;
        
        default:
            console.log(chalk.bold.red("4.Incrrect!"));
}

switch(quiz.question_5)
{
    case "number":
        console.log(chalk.bold.blueBright("5.Correct\n"));
        ++score;
        break;
        
        default:
            console.log(chalk.bold.red("5.Incrrect!\n"));
}
        
        

console.log(chalk.bold.green(`Your Total Score is : ${score} Out of 5`));
