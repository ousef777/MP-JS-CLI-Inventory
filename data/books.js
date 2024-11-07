import { v4 as uuid4 } from "uuid";

const books = [
  {
    id: uuid4(),
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkein",
    genre: "Fantasy",
    year: 1954,
  },
  {
    id: uuid4(),
    "title": "The Light of Dawn",
    "author": "Alice Matthews",
    "genre": "Fiction",
    "year": 2020,
    "ISBN": "978-3-16-148410-0"
  },
  {
    id: uuid4(),
    "title": "Mysteries of the Ocean",
    "author": "Robert Foster",
    "genre": "Adventure",
    "year": 2018,
    "ISBN": "978-1-60309-452-8"
  },
  {
    id: uuid4(),
    "title": "Hidden Truths",
    "author": "Emily Cross",
    "genre": "Mystery",
    "year": 2022,
    "ISBN": "978-0-545-01022-1"
  },
  {
    id: uuid4(),
    "title": "The Ancient Scrolls",
    "author": "John Thornton",
    "genre": "Historical Fiction",
    "year": 2015,
    "ISBN": "978-0-7432-7356-0"
  },
  {
    id: uuid4(),
    "title": "Wonders of the Universe",
    "author": "Dr. Sarah Lane",
    "genre": "Science",
    "year": 2021,
    "ISBN": "978-0-06-097625-5"
  },
  {
    id: uuid4(),
    "title": "Tales from Tomorrow",
    "author": "Mike Sanders",
    "genre": "Science Fiction",
    "year": 2019,
    "ISBN": "978-1-4088-5644-7"
  },
  {
    id: uuid4(),
    "title": "Gardening for Beginners",
    "author": "Linda Adams",
    "genre": "Non-Fiction",
    "year": 2017,
    "ISBN": "978-0-312-42948-4"
  },
  {
    id: uuid4(),
    "title": "The Art of Happiness",
    "author": "Mark Benson",
    "genre": "Self-Help",
    "year": 2023,
    "ISBN": "978-1-86063-116-4"
  },
  {
    id: uuid4(),
    "title": "Echoes of Eternity",
    "author": "Sophie Williams",
    "genre": "Fantasy",
    "year": 2020,
    "ISBN": "978-0-571-29066-7"
  },
];

export default books;
