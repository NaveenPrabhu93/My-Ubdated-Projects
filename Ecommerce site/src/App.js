import React from 'react';
import homepage from './Homepage';
import Homepage from './Homepage';
import Nikeshoes from './nikeshoes';
import nikeshoes from './nikeshoes.css';
import Nikesandels from './nikesandels';
import Nikesports from './nikesports';
import nikesports from './nikesports.css';
import home from './home.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function App() {
  return (
    <>
    <div className='header'>

    <div className='adjust-div'></div>
    <div className='nav-div'></div>
    <div className='adjust-div-1'>
    <Router>
       <div className='nav'>

       <Link to="/home" className='active-link'>Home</Link> &nbsp;&nbsp;
       <Link to="./about" className='active-link'>Certificate</Link>&nbsp;&nbsp;
       <Link to="./contact" className='active-link'>Contact</Link>&nbsp;&nbsp;
      </div>          
     </Router> 
    </div>
    </div>
    <Router>
    <Routes>
       <Route path="/" element={<Homepage/>} ></Route>
       <Route path="/nikeshoes" element={<Nikeshoes/>}></Route>
       <Route path="/nikesandels" element={<Nikesandels/>}></Route>
       <Route path="/nikesports" element={<Nikesports/>}></Route>
      </Routes>
    </Router>

    &nbsp;&nbsp;&nbsp;&nbsp;
    <div className='footer'></div>
    </>
  );
}

export default App;
