import ListBook from "@/components/Libros/lista-lectura/ListBook";
import { useBookContext } from "@/providers/BookProvider";

export default function ReadList({ onCloseClick }) {
  const bookHook = useBookContext();
  function onDragOver(e) {
    e.preventDefault();
  }

  function onDropAvailableBook(e) {
    const data = e.dataTransfer.getData("text");

    // If it doesn't start with ISBN return
    if (!data.startsWith("ISBN")) return;

    const ISBN = data.substring(4);
    const searchBook = bookHook.books.find((book) => book.ISBN === ISBN);
    // If it exists in the read list return (it is not in available books)
    if (searchBook === undefined) return;

    // Set the book to the read list
    bookHook.addToReadList(searchBook);
  }

  return (
    <>
      <header className="bg-[#242424] text-xl py-2 sticky top-0 relative">
        <h2>Lista de lectura ({bookHook.filteredReadList.length})</h2>
        <button
          className="md:hidden absolute right-[5px] top-[20%] flex items-center justify-center border rounded-[50px] bg-transparent hover:bg-[#181818] w-[30px] h-[30px]"
          onClick={onCloseClick}
        >
          <span className="text-[10px]">X</span>
        </button>
      </header>
      <section>
        <article className="reading-list-background relative">
          <div
            id="reading-list"
            onDragOver={onDragOver}
            onDrop={onDropAvailableBook}
            className="reading-list overflow-auto max-h-[85vh] pb-[60px]"
          >
            {getLibros()}
          </div>
        </article>
      </section>
      
    </>
  );

  function getLibros() {
    return bookHook.filteredReadList.length > 0 ? (
      bookHook.filteredReadList.map((item) => {
        return (
          <ListBook
            key={item.ISBN}
            book={item}
            removeBook={() => bookHook.removeFromReadList(item)}
          ></ListBook>
        );
      })
    ) : (
      <>
        <div className="absolute top-[30%] flex flex-col items-center">
          <img
            draggable="false"
            className="w-[150px] h-[150px]"
            src="/assets/img/empty_box.png"
            alt="empty box"
          />
          <p className="text-white-100">
            Haz click en los libros o arrástralos aquí
          </p>
        </div>
      </>
    );
  }
}
