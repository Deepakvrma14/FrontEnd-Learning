import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
const AppContext = createContext();

export const AppProvider = ({children}) =>{
    const [searchTerm, setSearchTerm] = useState('cat');
    const [isDarkTheme, setIsDarkTheme] = useState('true');

    const toggleDarkTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem('darkTheme', isDarkTheme);
    };
    useEffect(()=>{
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme]);
    return (
        <AppContext.Provider value={{isDarkTheme, toggleDarkTheme , searchTerm, setSearchTerm }}>
            {children}
        </AppContext.Provider>
    );
    
}
export const useGlobalContext = () => useContext(AppContext);



