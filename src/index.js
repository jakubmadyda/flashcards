import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Learning from "./components/Learning/Learning";
import Layout from "./components/Layout/Layout";
import Decks from "./components/Decks/Decks";
import FinishLearning from "./components/FinishLearning/FinishLearning";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Decks />
            },
            {
                path: 'end',
                element: <FinishLearning/>
            }
        ]
    },
    {
        path: "/decks/:id",
        element: <Learning />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
