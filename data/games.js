import { v4 as uuid4 } from "uuid";

const games = [
  {
    id: uuid4(),
    "title": "Mystic Quest",
    "genre": "Fantasy Adventure",
    "players": "2-4",
    "age": "12+",
    "release_year": 2019
  },
  {
    id: uuid4(),
    "title": "Galaxy Conquest",
    "genre": "Strategy",
    "players": "3-6",
    "age": "14+",
    "release_year": 2021
  },
  {
    id: uuid4(),
    "title": "Detective Chronicles",
    "genre": "Mystery",
    "players": "1-5",
    "age": "10+",
    "release_year": 2018
  },
  {
    id: uuid4(),
    "title": "Castle Builders",
    "genre": "Construction",
    "players": "2-4",
    "age": "8+",
    "release_year": 2020
  },
  {
    id: uuid4(),
    "title": "Time Travelers",
    "genre": "Sci-Fi Adventure",
    "players": "2-6",
    "age": "13+",
    "release_year": 2017
  }
];

export default games;
