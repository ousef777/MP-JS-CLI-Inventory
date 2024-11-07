import { v4 as uuid4 } from "uuid";

import games from "./data/games.js";

const Game = {};

Game.create = function (gameData) {
  const newGame = { ...gameData, release_year: +gameData.release_year, id: uuid4() };
  games.push(newGame);
  return newGame;
};

Game.find = function (where) {
  return games;
};

Game.findById = function (gameId) {
  return games.find((game) => game.id === gameId);
};

Game.delete = function (gameId) {
  const deleteIndex = games.findIndex((game) => game.id === gameId);
  if (deleteIndex !== -1) games.splice(deleteIndex, 1);
};

export default Game;
