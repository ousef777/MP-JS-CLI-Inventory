import inquirer from "inquirer";
import showMenu from "./menu.js";
import showGamesMenu from "./gamesMenu.js";
// Start the CLI
function start() {
    console.log("\n");
    const choices = [
        { name: "Books", value: "books" },
        { name: "Games", value: "games" },
        { name: "Exit", value: "exit" },
    ];
    inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "Choose an Category:",
                choices,
            },
        ])
        .then((answers) => {
            switch (answers.action) {
                case "books":
                    showMenu();
                    break;
                case "games":
                    showGamesMenu();
                    break;
                case "exit":
                    console.log("Exiting the program.");
                    break;
            }
        });
}

start();

export default start;