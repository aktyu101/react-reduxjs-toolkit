import { Link } from "react-router-dom";

export default function Navigation() {
  return (
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
          <li>
            <Link to="/scrollanimation" style={{ color: "#fff" }}>
              scrollanimation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
