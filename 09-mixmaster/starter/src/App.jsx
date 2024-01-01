import React from "react";
import {
  HomeLayout,
  About,
  // Landing,
  // Error,
  // Newsletter,
  // Cocktail,
} from './pages';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;