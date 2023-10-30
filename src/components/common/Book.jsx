export default function Book({ book, bookDetails, className, detailsClassName, onclick }) {
  return (
    <>
      <div className="relative h-fit w-fit">
        <div className="book relative z-[1]">
          <img
            onDragStart={(e) => e.dataTransfer.setData("text", e.target.id)}
            id={"ISBN"+book.ISBN}
            draggable="true"
            src={book.cover}
            alt={book.title}
            className={className}
            onClick={onclick}
          />
        </div>
        <div
          className={
            "sinopsis overflow-clip absolute top-0 px-4 bg-[#3d3d3d] h-full " +
            detailsClassName
          }
        >
          <span className="font-bold text-xs ellipsis">{bookDetails}</span>
        </div>
      </div>
    </>
  );
}
