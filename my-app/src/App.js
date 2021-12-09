import './App.css';
import About from './shared/components/About';
import Endpoints from './shared/components/Endpoints';
import {HashRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {

  return (
  
    <Router>
        <Routes>
          <Route path='/endpoints' element={<Endpoints />}></Route>
          <Route path='/'exact element={<About />}>
          </Route>
        </Routes>

        <Link to="/endpoints"></Link>

    </Router>
    
 
  );
}

export default App;
