import './App.css';
import './css/navbar.css'
import './css/card.css'
import './css/login.css'
import './css/about.css'
import './css/payment.css'
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { Login } from './components/Login';
import { About } from './components/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Payment from './components/Payment';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/issues" element={<Card />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
