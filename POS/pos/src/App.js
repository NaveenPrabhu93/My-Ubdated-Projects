import logo from './logo.svg';
import './App.css';
import POS from './components/project';
import CSS from './components/css.css';
import Tabels from './tabels';
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";


function App() {
  return (
 
        <Router>
        <Routes>
       <Route path="/" element={<Tabels/>} ></Route>
       <Route path="/bill" element={<POS/>} ></Route>
      
      </Routes>
      </Router>
     
  );
}

export default App;
