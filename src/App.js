import React from "react";
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from "./Components/Pages/About";
import Appointment from "./Components/Pages/Appointment";
import Service from "./Components/Pages/Service";



function App() {
  return (
    < >

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/'element={<Home />}/>
<Route path='/about' element ={<About/>}/>
<Route path='/appointment' element ={<Appointment/>}/>
<Route path='/services' element ={<Service/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
