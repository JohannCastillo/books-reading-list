import { useState, useRef } from "react";
import books from "../data/books.json";

import {
  storageSetBook,
  storageRemoveBook,
  getAvailableBooksFromStorage,
  getReadListFromStorage,
} from "../helpers/localstorage";

const BOOKS = books?.library.map((book) => {
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

const INITIAL_DATA = {
  readList: getReadListFromStorage(BOOKS),
  availableBooks: getAvailableBooksFromStorage(BOOKS),
};

//Return of all genres
export const GENRES = ["Todos", ...new Set(BOOKS.map((book) => book.genre))];

//Return de num of pages of each book to set the range step in the filter
export const MAXPAGES = BOOKS.reduce((a, b) => {
  return a.pages > b.pages ? a : b;
}).pages;

const INITIAL_FILTERS = {
  paginas: 0,
  genero: "Todos",
};

export function useBook() {
  const [books, setBooks] = useState(INITIAL_DATA.availableBooks);
  const [filteredBooks, setFilteredBooks] = useState(INITIAL_DATA.availableBooks);

  const [readList, setReadList] = useState(INITIAL_DATA.readList);
  const [filteredReadList, setFilteredReadList] = useState(INITIAL_DATA.readList);
  
  const filter = useRef(INITIAL_FILTERS);

  function changeFilter(e) {
    const { name, value } = e.target;
    const regex = /^[0-9]*$/g;

    if (name === "paginas" && !value.match(regex)) return;

    filter.current = {
      ...filter.current,
      [name]: value !== "" ? value : 0,
    };

    setFilteredBooks(filterBooks(books));
    setFilteredReadList(filterBooks(readList));
  }

  function filterBooks(books) {
    return books.filter((book) => {
      const filterPages =
        filter.current.paginas != INITIAL_FILTERS.paginas
          ? book.pages == filter.current.paginas
          : true;
      const filterGenres =
        filter.current.genero !== INITIAL_FILTERS.genero
          ? book.genre === filter.current.genero
          : true;
      return filterPages && filterGenres;
    });
  }

  function addToReadList(book) {
    const newList = [...readList];
    newList.push(book);
    updateReadList(newList);
    //remove book from list of available books
    const newAvailableBooks = books.filter((item) => item.ISBN !== book.ISBN)
    setBooks(newAvailableBooks);
    setFilteredBooks(filterBooks(newAvailableBooks));
    //add book to local storage
    storageSetBook(book.ISBN);
  }

  function removeFromReadList(book) {
    const newList = [...readList].filter((item) => item.ISBN !== book.ISBN);
    updateReadList(newList);
    // add book to list of available books
    setBooks([...books, book]);
    setFilteredBooks(filterBooks([...books, book]));
    // remove book from local storage
    storageRemoveBook(book.ISBN);
  }

  function updateReadList(readList) {
    setReadList(readList);
    const newFilteredList = filterBooks(readList);
    setFilteredReadList(newFilteredList);
  }

  return {
    books,
    filteredBooks,
    readList,
    filteredReadList,
    filter,
    changeFilter,
    addToReadList,
    removeFromReadList,
  };
}
