import React from "react";
// import Gallery from './Gallery';
import SearchForm from './SearchForm';
import ThemeToggle from './ThemeToggle';
import { AppProvider } from './context';
const App = () => {
  return (
    <AppProvider>
      <ThemeToggle />
      <SearchForm />
    </AppProvider>
    
  );
};
export default App;
