import inquirer from "inquirer";
import { sum, subtract, multiply, division, modulus } from "./operations.js";

console.log("Calculator Project");
do{
  const questions = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter your 1st Number",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter your 2nd Number",
    },
    {
      type: "list",
      name: "operator",
      message: "Select your Operator",
      choices: ["+", "-", "*", "/", "%"],
    },
  ]);

  if (questions.operator == "+") {
    sum(questions.num1, questions.num2);
  } else if (questions.operator == "-") {
    subtract(questions.num1, questions.num2);
  } else if (questions.operator == "*") {
    multiply(questions.num1, questions.num2);
  } else if (questions.operator == "/") {
    division(questions.num1, questions.num2);
  } else if (questions.operator == "%") {
    modulus(questions.num1, questions.num2)
  } else {
    console.log("Invalid Operator");
  }

  let want = await inquirer.prompt([
    {
        type: "input",
        name: "more",
        message: "You want more calculations? 0/1. ",
    }
  ])

  if(want.more == 0){
    console.log("Thanks Using Calculator")
    break;
  }


}while(true);