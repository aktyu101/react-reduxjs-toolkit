import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store"; //
import { Provider } from "react-redux"; //
import Counter from "./pages/counter";
import Task from "./pages/task";
import Photos from "./pages/photos";
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
      {
        path: "photos",
        element: <Photos />,
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
      <nav
        style={{
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          borderBottom: "solid 1px #222",
          backgroundColor: "#222",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ul>
            <li style={{ color: "#fff" }}>home</li>
          </ul>
          <ul
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <li style={{ color: "#fff" }}>task</li>
            <li style={{ color: "#fff" }}>counter</li>
          </ul>
        </ul>
      </nav>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
