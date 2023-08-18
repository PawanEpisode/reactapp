import './App.css';
import { Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Assessment from './pages/Assessment/Assessment';
import Library from './pages/MyLibrary/Library';
import RoundStatus from './pages/AdminRoundStatus/RoundStatus';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route index path='/' element={<Dashboard />}/>
        <Route path='/assessment' element={<Assessment />}/>
        <Route path='/library' element={<Library />}/>
        <Route path='/roundstatus' element={<RoundStatus />}/>
      </Routes>
    </div>
  );
}

export default App;
