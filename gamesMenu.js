import inquirer from "inquirer";

import { addGame, deleteGame, updateGame, viewGames, searchGame } from "./game_controllers.js";
import start from "./index.js";

function showGamesMenu() {
  console.log("\n");
  const choices = [
    { name: "Add a game", value: "add" },
    { name: "Update a game", value: "update" },
    { name: "Search a game", value: "search" },
    { name: "Delete a game", value: "delete" },
    { name: "View all games", value: "list" },
    { name: "Choose a different catergory", value: "back" },
    { name: "Exit", value: "exit" },
  ];
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Choose an action:",
        choices,
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "add":
          addGame();
          break;
        case "update":
          updateGame();
          break;
        case "search":
          searchGame();
          break;
        case "delete":
          deleteGame();
          break;
        case "list":
          viewGames();
          break;
        case "back":
          start();
          break;
        case "exit":
          console.log("Exiting the program.");
          break;
      }
    });
}

export default showGamesMenu;
