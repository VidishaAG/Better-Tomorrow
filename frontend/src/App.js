import './App.css';
import './css/navbar.css'
import './css/card.css'
import './css/login.css'
import './css/about.css'
import './css/payment.css'
import './css/ideasubmit.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { Login } from './components/Login';
import { About } from './components/About';
import Payment from './components/Payment';
import { NGO } from './components/NGO';
import {IdeaSubmit} from './components/IdeaSubmit';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/issues" element={<Card />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/ngo" element={<NGO />} />
        <Route path="/ideasubmit" element={<IdeaSubmit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
