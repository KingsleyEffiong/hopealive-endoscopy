import React from "react";
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';


function App() {
  return (
    < >

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/'element={<Home />}/>
  <Route path='/about'element={<About />}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
