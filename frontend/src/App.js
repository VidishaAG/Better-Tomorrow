import './App.css';
import './css/navbar.css'
import './css/card.css'
import './css/login.css'

import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { Login } from './components/Login';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Card /> */}
      <Login />
    </div>
  );
}

export default App;
