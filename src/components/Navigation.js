import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "../pages/counter";
import Task from "../pages/task";
import Photos from "../pages/photos";
import App from "../App";

export default function Navigation() {
  return (
    <BrowserRouter>
      <header
        style={{
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          borderBottom: "solid 1px #222",
          backgroundColor: "#222",
          display: "flex",
          position: "sticky",
          top: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ul>
            <li>
              <Link to="/" style={{ color: "#fff" }}>
                home
              </Link>
            </li>
          </ul>
          <ul
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <li>
              <Link to="/task" style={{ color: "#fff" }}>
                task
              </Link>
            </li>
            <li>
              <Link to="/counter" style={{ color: "#fff" }}>
                counter
              </Link>
            </li>
            <li>
              <Link to="/photos" style={{ color: "#fff" }}>
                photos
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/" Component={App}></Route>
        <Route path="/task" Component={Task}></Route>

        <Route path="/counter" Component={Counter}></Route>

        <Route path="/photos" Component={Photos}></Route>
      </Routes>
    </BrowserRouter>
  );
}
