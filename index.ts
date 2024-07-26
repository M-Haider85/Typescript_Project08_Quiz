import inquirer from "inquirer";

const quiz = await inquirer.prompt([
  {
    type: "list",
    name: "question_1",
    message:
      "Q1.What is the correct way to check if two values are not equal in Typescript?",
    choices: ["a == b", "a === b", "a = b", "a !== b"],
  },
  {
    type: "list",
    name: "question_2",
    message:
      "Q2.Which of the following characters is commonly allowed in variable named in Typescript?",
    choices: ["$", "@", "#", "&"],
  },
  {
    type: "list",
    name: "question_3",
    message:
      "Q3.Which operator is commonly used for string concatenation in Typescript?",
    choices: ["+", "-", "*", "/"],
  },
  {
    type: "list",
    name: "question_4",
    message:
      "Q4.In Typescript,which symbol is commonly used to terminate a statement?",
    choices: [".", ":", ";", ","],
  },
  {
    type: "list",
    name: "question_5",
    message:
      "Q5.Which method of Inquirer.js is used to start the prompt interface & recieve user input?",
    choices: ["start()", "prompt()", "init()", "run()"],
  },
]);

let score: number = 0;

switch (quiz.question_1) {
  case "a !== b":
    console.log("1.Correct!");
    ++score;
    break;

  default:
    console.log("1.Incorrect!");

    break;
}
switch (quiz.question_2) {
  case "$":
    console.log("2.Correct!");
    ++score;

    break;

  default:
    console.log("2.Incorrect!");
    break;
}
switch (quiz.question_3) {
  case "+":
    console.log("3.Correct!");
    ++score;

    break;

  default:
    console.log("3.Incorrect!");
    break;
}
switch (quiz.question_4) {
  case ";":
    console.log("4.Correct!");
    ++score;

    break;

  default:
    console.log("4.Incorrect!");
    break;
}
switch (quiz.question_5) {
  case "prompt()":
    console.log("5.Correct!");
    ++score;
    break;

  default:
    console.log("5.Incorrect!");
    break;
}

console.log(`\nScore: ${score}`);
