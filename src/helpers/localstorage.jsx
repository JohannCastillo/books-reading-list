/**
 * Sets the value of a specified key in the browser's localStorage.
 *
 * @param {string} ISBN - The key to set in the localStorage.
 * @param {string} order - The value to set for the specified key.
 */
export const storageSetBook = (ISBN) => {
    window.localStorage.setItem(ISBN, ISBN)
}

export const storageRemoveBook = (ISBN) => {
    window.localStorage.removeItem(ISBN)
}

export const getReadList = () => {
    const readList = []
    for (let i = 0; i < window.localStorage.length; i++) {
        readList.push(window.localStorage.getItem(window.localStorage.key(i)))
    }

    return readList
}

export function getReadListFromStorage(BOOKS){
    return getReadList().reverse().map((item) => {
      return BOOKS.find((book) => book.ISBN === item)
    });
}

export function getAvailableBooksFromStorage(BOOKS){
    return BOOKS.filter((item) => {
      return getReadList().includes(item.ISBN) === false
    });
}

