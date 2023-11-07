import { createContext, useContext } from "react";
import { useBook } from "@/hooks/UseBook";

const BookContext = createContext()

export function BookProvider({ children }) {
    const bookHook = useBook()

    return (
        <BookContext.Provider value={bookHook}>
            {children}
        </BookContext.Provider>
    )
}

export function useBookContext(){
    return useContext(BookContext)
}