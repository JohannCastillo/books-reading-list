import Book from "../../common/Book";
import Button from "../../common/Button";

export default function ListBook({ book, removeBook }) {
  function bookDetails(book) {
    return (
      <>
        
        <div className="relative flex flex-wrap mt-2 h-full">
          <span className="absolute top-[-20px] left-[-12px] bg-[#181818] px-1 text-[0.8rem]">{book.genre}</span>
          <h1 className="text-[#181818] text-md w-full">{book.title}</h1>
          <div className="w-full h-[95%] overflow-clip">
            <span className="text-xs leading-[0.1]">{book.synopsis}</span>
          </div>
          <div className="absolute bottom-0 right-[-10px]">
            <span className="text-xs mb-2">págs. {book.pages}</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative h-fit">
        <Button
          className="z-[2] flex items-center justify-center absolute top-[-1px] right-[-2px] bg-red-500 w-[10px] h-[25px] hover:bg-red-600"
          onClick={removeBook}
        >
          X
        </Button>
        <Book
          book={book}
          bookDetails={bookDetails(book)}
          className={"h-[200px]"}
          detailsClassName={"h-[180px] pt-4"}
        />
      </div>
    </>
  );
}
