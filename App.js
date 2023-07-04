import './App.css';
import React, { useEffect} from "react";
import NavbarMenuItems from './components/NavbarMenuItems';
import {Route ,Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import EgyptItenary from './components/EgyptItenary';
import PlanTrip from './components/PlanTrip';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/EgyptItenary" element={<EgyptItenary/>}/>
        <Route path="/PlanTrip" element={<PlanTrip/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes> 
     
    </div>
  );
}

export default App;
