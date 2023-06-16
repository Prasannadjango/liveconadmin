import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar";
import "./Assests/Styles/Main.css";
import { Dashboard } from "./Pages/Dashboard";
import Manageuser from "./Pages/Manageuser";
import Loader from "./Components/Loader";
import Managecoins from "./Pages/Managecoins";
import Managegifts from "./Pages/Managegifts";
import Addgifts from "./Pages/Addgifts";

function App() {

  return (
    <>
     
        <BrowserRouter>
      
      <div className="app d-flex">
        <Sidebar />
        
          <div className="w-100 p-3 bg-neutral-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Manageusers" element={<Manageuser/>} />
              <Route path="/Managecoins" element={<Managecoins/>} />
              <Route path='/ManageGifts' element={<Managegifts/>}/>
              <Route path='/AddGifts' element={<Addgifts/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    
    </>
  );
}

export default App;
