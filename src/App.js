import './App.css';
import { History } from './Components/History';
import { Navbar } from './Components/Navbar';
import { Register } from './Components/Register';
import { Teams } from './Components/Teams';
import {Route,Router,Routes} from 'react-router-dom';

function App() {
  return (
     <div>
        <Navbar/>      
        <Routes>
          <Route path="history" element={<History />} />
          <Route path="teams" element={<Teams />} />
          <Route path="register" element={<Register />} />
        </Routes>
   </div>

  );
}

export default App;
