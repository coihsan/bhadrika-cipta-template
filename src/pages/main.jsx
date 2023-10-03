import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import Root from "./pages/Services";
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <h1>Hello</h1>
  </React.StrictMode>,
)