import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Pages/Home'

function App() {
  return (
    < >


  <div id='background-image'>
  <Navbar/>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>
</BrowserRouter>
</div>
    </>
  );
}

export default App;
