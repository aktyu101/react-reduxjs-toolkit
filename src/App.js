import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
