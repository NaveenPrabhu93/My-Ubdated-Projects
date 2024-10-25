import logo from './logo.svg';
import './components/css.css';
import Entry from './components/Entry';
import View from './components/view';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function App() {
 

  return (
    <Router> {/* Wrapping the entire App inside Router */}
      <>
      <div className='heading'>
        <center>
          <h1>PATIENT DATABASE MANAGEMENT</h1>
        </center>
        </div>

        <div className="App">
          <div className='links'>
            <center>
          <Link to="/">Entry Patient Data</Link><br></br>
          <Link to="/view">View Data</Link><br></br>
          <Link>Analytics</Link><br></br>
          <Link>User Settings</Link><br></br>
          <Link>Log Out</Link><br></br>
          </center>

          </div>

          <div className='router'>
            <Routes>
              <Route path="/" element={<Entry />} />
              <Route path="/view" element={<View />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
