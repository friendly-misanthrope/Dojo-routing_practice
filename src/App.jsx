import './App.css';
import { Routes, Route } from 'react-router-dom'
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
        <Route path='/:hello/:txtColor/:bgColor' element={<DisplayParameters />} />
      </Routes>
      
    </div>
  );
}

export default App;