import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar";
import "./Assests/Styles/Main.css";
import { Dashboard } from "./Pages/Dashboard";
import Manageuser from "./Pages/Manageuser";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="app d-flex">
        <Sidebar />
        
          <div className="content p-5">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Manageusers" element={<Manageuser/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
