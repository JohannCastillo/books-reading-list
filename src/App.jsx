import { useState } from "react";
import "./App.css";
import Availables from "@/components/Libros/disponibles/Disponibles";
import ReadList from "@/components/Libros/lista-lectura/ReadList";
import { BookProvider } from "@/providers/BookProvider";
import Button from "@/components/common/Button";

function App() {
  const screenWidth = window.innerWidth;
  const [asideVisibility, setAsideVisibility] = useState(screenWidth >= 768 ? true : false);

  const toggleAsideVisibility = () => {
    setAsideVisibility(!asideVisibility);
  };

  return (
    <>
      <main className="h-screen mx-auto w-full">
        <header className="bg-[#3d3d3d] h-[60px] flex justify-center items-center">
          <h1 className="font-bold text-2xl uppercase">Biblioteca</h1>
        </header>

        <div className="flex relative">
          <BookProvider>
            <section className="p-8 w-full md:w-[60%]">
              <Availables />
            </section>
            <aside
              id="aside"
              className="z-[1] items-center fixed w-[75%] md:w-[35%] h-[85vh] right-2 mt-8 border rounded-lg text-center overflow-hidden"
              style={{ visibility: asideVisibility ? "visible" : "hidden" }}
            >
              <ReadList onCloseClick={toggleAsideVisibility} />
            </aside>
            <div className="md:hidden z-[3] fixed top-[5%] right-2 mt-8 z-0" style={{ visibility: asideVisibility ? "hidden" : "visible" }}>
              <Button onClick={toggleAsideVisibility}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-journal-bookmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
                  />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
              </Button>
            </div>
          </BookProvider>
        </div>

        <footer></footer>
      </main>
    </>
  );
}

export default App;
