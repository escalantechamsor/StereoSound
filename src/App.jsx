import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className={`w-full h-[100vh] relative overflow-x-hidden`}>
      <NavBar />
      <div className="z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
