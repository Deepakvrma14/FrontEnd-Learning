import React from "react";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from './pages';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Home</h2>,
  },
  {
    path: "/about",
    element: <h2>About</h2>,
  },
  {
    path: "/contact",
    element: <h2>Contact</h2>,
  },
  {
    path: "*",
    element: <h2>Not Found</h2>,
  }

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;