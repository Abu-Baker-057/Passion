import inquirer from "inquirer";
import chalk from "chalk";
console.log("Adventure Game Project");
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelincrease() {
        this.fuel = 100;
    }
}
class Oponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please! Enter your name?",
    }
]);
let oponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your oponents",
        choices: ["Skeleton", "Assassin", "Zombie"],
    }
]);
let p1 = new Player(player.name);
let o1 = new Oponent(oponent.select);
console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
do {
    if (oponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your oponent",
                choices: ["Attack", "Drink Portion", "Run for your life ..."]
            }
        ]);
        if (ask.opt == "Attack") {
            // console.log("Attack")
            let num = Math.floor(Math.random() * 2);
            // console.log(num)
            if (num > 0) {
                // console.log("a")
                p1.fueldecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose, Better Luck Next"));
                    process.exit();
                }
            }
            if (num <= 0) {
                // console.log("b")
                o1.fueldecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win !!!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            // console.log("Drink Portion")
            p1.fuelincrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life ...") {
            console.log(chalk.red.bold.italic("You loose, Better Luck Next"));
            process.exit();
        }
    }
    if (oponent.select == "Assassin") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your oponent",
                choices: ["Attack", "Drink Portion", "Run for your life ..."]
            }
        ]);
        if (ask.opt == "Attack") {
            // console.log("Attack")
            let num = Math.floor(Math.random() * 2);
            // console.log(num)
            if (num > 0) {
                // console.log("a")
                p1.fueldecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose, Better Luck Next"));
                    process.exit();
                }
            }
            if (num <= 0) {
                // console.log("b")
                o1.fueldecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win !!!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            // console.log("Drink Portion")
            p1.fuelincrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life ...") {
            console.log(chalk.red.bold.italic("You loose, Better Luck Next"));
            process.exit();
        }
    }
    if (oponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your oponent",
                choices: ["Attack", "Drink Portion", "Run for your life ..."]
            }
        ]);
        if (ask.opt == "Attack") {
            // console.log("Attack")
            let num = Math.floor(Math.random() * 2);
            // console.log(num)
            if (num > 0) {
                // console.log("a")
                p1.fueldecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose, Better Luck Next"));
                    process.exit();
                }
            }
            if (num <= 0) {
                // console.log("b")
                o1.fueldecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win !!!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            // console.log("Drink Portion")
            p1.fuelincrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life ...") {
            console.log(chalk.red.bold.italic("You loose, Better Luck Next"));
            process.exit();
        }
    }
} while (true);
console.log("Thanks for Playing Adventure Game");
