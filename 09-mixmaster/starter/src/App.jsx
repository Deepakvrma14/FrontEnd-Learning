import React from "react";
import {loader as landingLoader} from "./pages/Landing";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages';
import {loader as cocktailLoader} from './pages/Cocktail';
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
      {
        path: "cocktail/:id",
        loader: cocktailLoader,
        errorElement: <SinglePageError />,
        element: <Cocktail />,
      },
      {
        index: true,
        loader: landingLoader,
        errorElement: <h2>Sorry, something went wrong</h2>,
        element: <Landing />,

      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "*",
        element: <Error />,
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