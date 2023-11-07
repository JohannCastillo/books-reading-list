import books from "../data/books.json";

export const BOOKS = books?.library.map((book) => {
    return {
      ISBN: book.book.ISBN,
      title: book.book.title,
      pages: book.book.pages,
      genre: book.book.genre,
      cover: book.book.cover,
      synopsis: book.book.synopsis,
      year: book.book.year,
      author: book.book.author,
    };
  });

//Return of all genres
export const GENRES = ["Todos", ...new Set(BOOKS.map((book) => book.genre))];
  
//Return de num of pages of each book to set the range step in the filter
export const MAXPAGES = BOOKS.reduce((a, b) => {
    return a.pages > b.pages ? a : b;
  }).pages;