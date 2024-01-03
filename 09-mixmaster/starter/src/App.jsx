import React from "react";
import {loader as landingLoader} from "./pages/Landing";
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
    element: <HomeLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        index: true,
        loader: landingLoader,
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