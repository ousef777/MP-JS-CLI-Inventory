import inquirer from "inquirer";

import Game from "./Game.js";
import showGamesMenu from "./gamesMenu.js";

export function addGame() {
  inquirer
    .prompt([
      { name: "title", message: "Enter game title:" },
      { name: "genre", message: "Enter the genre:" },
      { name: "players", message: "Enter the Player Count:" },
      { name: "age", message: "Enter the age:" },
      {
        name: "release_year",
        type: "input",
        message: "Enter the publishing year:",
        validate: (year) => {
          const yearNum = parseInt(year, 10);
          if (isNaN(yearNum)) {
            return "Please enter a valid number for the publishing year.";
          }
          return (
            yearNum <= new Date().getFullYear() ||
            "This game was published in the future??"
          );
        },
      },
    ])
    .then((game) => {
      Game.create(game);
      console.log(`Added ${game.title} by ${game.author}.`);
      showGamesMenu();
    });
}

export function updateGame() {
  const games = Game.find();
  if (games.length === 0) {
    console.log("No games available to update.");
    return showGamesMenu();
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "gameId",
        message: "Choose a game to update:",
        choices: games.map((game) => ({ name: game.title, value: game.id })),
      },
    ])
    .then(({ gameId }) => {
      const game = Game.findById(gameId);
      inquirer
        .prompt([
          {
            name: "title",
            message: "Enter new title (leave blank to keep current):",
          },
          {
            name: "genre",
            message: "Enter new genre (leave blank to keep current):",
          },
          {
            name: "players",
            message: "Enter new Player Count (leave blank to keep current):",
          },
          {
            name: "age",
            message: "Enter new age (leave blank to keep current):",
          },
          {
            name: "release_year",
            type: "input",
            message: "Enter new published year (leave blank to keep current):",
            validate: (release_year) => {
              const yearNum = parseInt(release_year, 10);
              if (isNaN(yearNum)) {
                return "Please enter a valid number for the publishing year.";
              }
              return (
                yearNum <= new Date().getFullYear() ||
                "This game was published in the future??"
              );
            },
          },
        ])
        .then((updates) => {
          const { title, genre, players, age, release_year } = updates;
          if (title) game.title = title;
          if (genre) game.genre = genre;
          if (players) game.players = players;
          if (age) game.age = age;
          if (release_year) game.release_year = +release_year;
          console.log(`Updated ${game.title}.`);
          showGamesMenu();
        });
    });
}

export function deleteGame() {
  const games = Game.find();
  if (games === 0) {
    console.log("No games available to delete.");
    return showGamesMenu();
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "gameId",
        message: "Choose a game to delete:",
        choices: games.map((game) => ({ name: game.title, value: game.id })),
      },
    ])
    .then(({ gameId }) => {
      Game.delete(gameId);
      console.log(`Deleted game: "${gameId}".`);
      showGamesMenu();
    });
}

export function viewGames() {
  const games = Game.find();
  console.log("\nCurrent Game Catalgoue:");
  if (games.length === 0) {
    console.log("No games in the catalgoue.");
  } else {
    console.table(games, ["title", "genre", "players", "age", "release_year"]);
  }
  showGamesMenu();
}

export function searchGame() {
  const choices = [
    { name: "Search by title", value: "title" },
    { name: "Search by author", value: "author" },
    { name: "Search by genre", value: "genre" },
    { name: "Search by year", value: "year" },
  ];
  inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Select an option:",
      choices,
    },
  ])
    .then((answers) => {
      switch (answers.action) {
        case "title":
          inquirer.prompt([{ name: "title", message: "Enter the title:" },]).then(title => findGame(title.title));
          break;
        case "author":
          inquirer.prompt([{ name: "author", message: "Enter the author:" },]).then(author => findGame(author.author));
          break;
        case "genre":
          inquirer.prompt([{ name: "genre", message: "Enter the genre:" },]).then(genre => findGame(genre.genre));
          break;
        case "year":
          inquirer.prompt([{ name: "year", message: "Enter the year:" },]).then(year => findGame(year.year));
          break;
      }
    });
}

export function findGame(search) {
  const games = Game.find().filter(game => Object.values(game).join().includes(search)); //parseInt(year) == NaN ? year : +year
  console.log("\nCurrent Game Catalgoue:");
  if (games.length === 0) {
    console.log("No games in the catalgoue.");
  } else {
    console.table(games, ["title", "genre", "players", "age", "release_year"]);
  }
  showGamesMenu();
}