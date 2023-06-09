import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store"; //
import { Provider } from "react-redux"; //
import Counter from "./components/counter";
import Task from "./components/task";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import { Global, css } from "@emotion/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "task",
        element: <Task />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }
        ,
        ul,
        ol,
        dl {
          list-style: none;
        }
        ,
        a {
          text-decoration: none;
        }
      `}
    />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
