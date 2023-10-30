import { GENRES, MAXPAGES } from "../../../hooks/UseBook"; 
import { useBookContext } from "../../../providers/BookProvider";

export default function Filtros(){
    const genres = [...GENRES];
    const useBook = useBookContext();
    return (
        <>
        <div className="flex flex-col md:flex-row gap-[30px] [&>div]:flex [&>div]:flex-col [&>div>label]:mb-4">
          <div className="w-[200px]">
            <label htmlFor="paginas">Filtrar por páginas</label>
            <input
              onChange={useBook.changeFilter}
              type="range"
              name="paginas"
              value={useBook.filter.current.paginas}
              min={0}
              max={MAXPAGES}
            />
            <input
              onChange={useBook.changeFilter}
              name="paginas"
              type="text"
              className="text-sm w-[80px] mt-2 rounded-md pl-2"
              value={
                useBook.filter.current.paginas > 0
                  ? useBook.filter.current.paginas
                  : ""
              }
            />
          </div>
          <div>
            <label htmlFor="genero">Género</label>
            <select
              onChange={useBook.changeFilter}
              name="genero"
              className="h-[30px] rounded-md bg-[#3d3d3d] w-[full] pl-2"
            >
              {genres.map((genre) => {
                return (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        </>
    )
}