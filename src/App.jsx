import "./App.css";
import Availables from "./components/Libros/disponibles/Disponibles";
import ReadList from "./components/Libros/lista-lectura/ReadList";
import { BookProvider } from "./providers/BookProvider";

function App() {
  return (
    <>
      <main className="h-screen mx-auto w-full">
        <header className="bg-[#3d3d3d] h-[60px] flex justify-center items-center">
          <h1 className="font-bold text-2xl uppercase">Biblioteca</h1>
        </header>

        <div className="flex">
          <BookProvider>
            <section className="p-8 w-[60%]">
              <Availables/>
            </section>

            <aside className="items-center fixed w-[35%] h-[85vh] right-2 mt-8 border rounded-lg text-center overflow-hidden">
              <ReadList/>
            </aside>
          </BookProvider>
        </div>

        <footer></footer>
      </main>
    </>
  );
}

export default App;
