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
import {action as newsletterAction} from './pages/Newsletter';
import {loader as cocktailLoader} from './pages/Cocktail';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
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
        loader: cocktailLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Cocktail />,
      },
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <h2>Sorry, something went wrong</h2>,
        element: <Landing />,

      },
      {
        path: "newsletter",
        action: newsletterAction,
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;