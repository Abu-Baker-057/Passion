import inquirer from "inquirer";

console.log("TODO List Project");
let todo : string[] = [];
async function create_todo (todo : string[])
{
    do{
        let ans = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: "Selact an operator",
                choices: ["Add", "Update", "View", "Delete", "Exit"],
            }
        ])
        if(ans.select == "Add"){
            let add_todo = await inquirer.prompt([
                {
                    type: "input",
                    name: "add",
                    message: "Add items ... ",
                }
            ]);
            todo.push(add_todo.add);
            console.log(todo);
        }
        if(ans.select == "Update"){
            let update_todo = await inquirer.prompt([
                {
                    type: "list",
                    name: "update",
                    message: "Select item for update",
                    choices: todo.map(item => item)
                }
            ]);
            let add_todo = await inquirer.prompt([
                {
                    type: "input",
                    name: "add",
                    message: "Add items ... "
                }
            ]);
            let new_todo = todo.filter(val => val !== update_todo.update)
            todo = [...new_todo,add_todo.add]
            console.log(todo)
        }
        if(ans.select == "View"){
            console.log(todo);
        }
        if(ans.select == "Delete"){
            let delate_todo = await inquirer.prompt([
                {
                    type: "list",
                    name: "delete",
                    message: "Select item for update",
                    choices: todo.map(item => item),
                },
            ]);
            let new_todo = todo.filter(val => val !== delate_todo.delete);
            todo = [...new_todo];
            console.log(todo);
        }
        if(ans.select == "Exit"){
            console.log("Your's TODO List is");
            let size = todo.length;
            for(let i = 0; i < size; i++){
                console.log(`${i+1}. ${todo[i]}`);
            }
            console.log("Thanks using Todo List");
            break;
        }
    } while (true);
}

let ask = await inquirer.prompt([
    {
        type: "input",
        name: "want",
        message: "You want to create todo list 0/1 ",
    }
])

if(ask.want == 1){
    create_todo(todo)
}else if(ask.want == 0){
    console.log("Thanks for visiting TODO App")
}else{
    console.log("Invalid value")
}

