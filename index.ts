#! /user/bin/env node
import inquirer from "inquirer";
let todos = [];

let condition = true;

while (condition) {
  let addtask = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "what you want to add in your todos",
    },
    {
      name: "addmore",
      type: "confirm",
      message: "do you want to add more?",
      default: "false",
    },
  ]);
  console.log(addtask);
  todos.push(addtask.yodo);
  condition=addtask.addmore 
  console.log(todos);
};
