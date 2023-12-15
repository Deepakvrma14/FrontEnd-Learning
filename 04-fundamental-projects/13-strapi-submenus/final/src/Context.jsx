import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen , setSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () =>{
    setSidebarOpen(true);
  }
  const closeSidebar = () =>{
    setSidebarOpen(false);
  }
  
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
