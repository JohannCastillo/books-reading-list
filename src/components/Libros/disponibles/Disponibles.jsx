import Filtros from "@/components/Libros/filtros/Filtros";
import Book from "@/components/common/Book";
import { useBookContext } from "@/providers/BookProvider";

export default function Availables() {
  const book = useBookContext();

  function bookDetails(book) {
    return (
      <>
        <div className="flex flex-wrap h-full">
          <div className="w-full flex flex-col">
            <h1 className="font-bold w-full text-[1.2rem] leading-[1.2] text-[#101010]">
              {book.title}
            </h1>
            <div className="w-full flex justify-between my-2 [&>span]:text-xs bg-[#181818] p-1">
              <span>{book.author.name}</span>
              <span>{book.year}</span>
            </div>
            <span className="text-[1rem] my-2 leading-[1.2]">
              {book.synopsis}
            </span>
          </div>

          <div className="self-end flex justify-between items-center w-full [&>span]:text-[12px]">
            <span className="bg-[#181818] px-2 ">{book.genre}</span>
            <span>págs. {book.pages}</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <article>
        <h1 className="text-[2.2rem] mb-8">
          {book.filteredBooks.length} libros disponibles
        </h1>

        <Filtros />

        <div className="books-section">
          {book.filteredBooks.map((item) => {
            return (
              <Book
                key={item.ISBN}
                book={item}
                bookDetails={bookDetails(item)}
                className="h-[250px] w-[200px] md:w-[250px] md:h-[300px] hover:cursor-move"
                detailsClassName={"pt-2 h-[96%]"}
                onclick={() => book.addToReadList(item)}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
