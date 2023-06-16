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
import Managehashtags from "./Pages/Managehashtags";
import Addhashtags from "./Pages/Addhashtags";
import Managebadges from "./Pages/Managebadges";
import Addbadges from "./Pages/Addbadges";
import Managegroups from "./Pages/Managegroups";
import Notifications from "./Pages/Notifications";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app d-flex">
          <Sidebar />

          <div className="w-100 p-3 bg-neutral-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Manageusers" element={<Manageuser />} />
              <Route path="/Managecoins" element={<Managecoins />} />
              <Route path="/ManageGifts" element={<Managegifts />} />
              <Route path="/Managehashtags" element={<Managehashtags />} />
              <Route path="/Managebadges" element={<Managebadges />} />
              <Route path="/Managegroups" element={<Managegroups />} />
              <Route path="/Addbadges" element={<Addbadges />} />
              <Route path="/AddGifts" element={<Addgifts />} />
              <Route path="/Addhashtags" element={<Addhashtags />} />
              <Route path="/Notification" element={<Notifications/>} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
