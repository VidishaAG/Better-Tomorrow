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
import Payment from './components/Payment'
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Card /> */}
      {/* <Login /> */}
      {/* <About /> */}
      <Payment />
    </div>
  );
}

export default App;
