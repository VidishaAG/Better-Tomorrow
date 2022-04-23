import './App.css';
import './css/home.css'
import './css/login.css'
import './css/about.css'

import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { Login } from './components/Login';
import { About } from './components/About';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Card /> */}
      {/* <Login /> */}
      <About />
    </div>
  );
}

export default App;
