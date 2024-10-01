import inquirer from "inquirer";

console.log("Quiz Project");

let q1 = "1- What is TypeScript primarily used for?";
let q2 = "2- Which of the following is a TypeScript feature?";
let q3 = "3- How do you declare a variable of type number in TypeScript?";
let q4 = "4- Which object type is NOT built-in in TypeScript?";
let q5 = "5- What is the correct way to define an interface in TypeScript?";
let q6 = "6- Which access modifier makes a member of a class visible only to that class and subclasses?";
let q7 = "7- What does the 'any' type represent in TypeScript?";
let q8 = "8- How do you enable strict null checks in TypeScript?";
let q9 = "9- Which method can be used to ensure that a variable is of a certain type at runtime in TypeScript?";
let q10 = '10- What is the output of the following TypeScript code snippet? TypeScript  let x: any = "hello";   console.log(typeof x);';

let q1op = "\nA) Writing server-side applications\nB) Writing client-side scripts\nC) Adding types to JavaScript to enable static type checking\nD) Compiling Python code to JavaScript";
let q2op = "\nA) Type inference\nB) Pointer arithmetic\nC) Multiple inheritance\nD) Memory management";
let q3op = "\nA) let x = number;\nB) let x: number;\nC) number x = 0;\nD) let x = 'number'";
let q4op = "\nA) Array\nB) Set\nC) Map\nD) Tuple";
let q5op = "\nA) interface Person { name: string; age: number; }\nB) class Person { name: string; age: number; }\nC) type Person = { name: string; age: number; }\nD) model Person { name: string; age: number; }";
let q6op = "\nA) public\nB) private\nC) protected\nD) internal";
let q7op = "\nA) Any object with a length property\nB) Any type of value, no specific type assignment\nC) Any function with no return value\nD) Any array of mixed types";
let q8op = "\nA) Set 'strictNullChecks': true in the tsconfig.json file\nB) Use the --strictNullChecks flag when running the tsc command\nC) Declare variables with strictNullChecks keyword\nD) Both A and B are correct";
let q9op = "\nA) Type casting\nB) Type inference\nC) Type checking\nD) Type guarding";
let q10op = "\nA) 'string'\nB) 'any'\nC) 'object'\nD) 'undefined'";

const quiz = await inquirer.prompt([
    {
        type: "list",
        name: "Q1",
        message: q1 + q1op,
        choices: ["A", "B", "C", "D"],
    },
    {
        type: "list",
        name: "Q2",
        message: q2 + q2op,
        choices: ["A", "B", "C", "D"],
    },
    {
        type: "list",
        name: "Q3",
        message: q3 + q3op,
        choices: ["A", "B", "C", "D"],
    },
    {
        type: "list",
        name: "Q4",
        message: q4 + q4op,
        choices: ["A", "B", "C", "D"],
    },
    {
        type: "list",
        name: "Q5",
        message: q5 + q5op,
        choices: ["A", "B", "C", "D"],
    },
    {
        type: "list",
        name: "Q6",
        message: q6 + q6op,
        choices: ["A", "B", "C", "D"],
    },
    {
        type: "list",
        name: "Q7",
        message: q7 + q7op,
        choices: ["A", "B", "C", "D"],
    },
    {
        type: "list",
        name: "Q8",
        message: q8 + q8op,
        choices: ["A", "B", "C", "D"],
    },
    {
        type: "list",
        name: "Q9",
        message: q9 + q9op,
        choices: ["A", "B", "C", "D"],
    },
    {
        type: "list",
        name: "Q10",
        message: q10 + q10op,
        choices: ["A", "B", "C", "D"],
    },
])

let sum = 0;
if (quiz.Q1 == "C") {
    sum++;
} if (quiz.Q2 == "A") {
    sum++;
} if (quiz.Q3 == "B") {
    sum++;
} if (quiz.Q4 == "D") {
    sum++;
} if (quiz.Q5 == "A") {
    sum++;
} if (quiz.Q6 == "C") {
    sum++;
} if (quiz.Q7 == "B") {
    sum++;
} if (quiz.Q8 == "D") {
    sum++;
} if (quiz.Q9 == "D") {
    sum++;
} if (quiz.Q10 == "A") {
    sum++;
}

let average = (sum * 100) / 10;

console.log(`Result = ${average}%`);

console.log("Thanks for try Quiz")