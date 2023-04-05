import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import GoHome from './components/GoHome'
import DisplayParameters from './components/DisplayParameters';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GoHome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/:hello' element={<DisplayParameters />} />
        {/* <Route /> */}
        
      </Routes>
      
    </div>
  );
}

export default App;