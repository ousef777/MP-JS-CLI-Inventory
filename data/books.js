import { v4 as uuid4 } from "uuid";

let books = [
  {
    id: uuid4(),
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkein",
    genre: "Fantasy",
    published: 1954,
  },
];

export default books;
