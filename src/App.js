import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CarDesc } from './pages/CarDesc';
import {UserInfo} from './pages/UserInfo'
import { Checkout } from './pages/Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path={'car/:id'} element={<CarDesc/>}/>
          <Route path='/userinfo' element={<UserInfo/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
