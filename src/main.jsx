import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App'
import './index.css';
import ErrorPage from "./error-page";
import BuildaWebsite from "./pages/buildawebsite";

const router = createBrowserRouter([
  {
    path: "/vite-first/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/vite-first/pages",
        element: <BuildaWebsite />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);