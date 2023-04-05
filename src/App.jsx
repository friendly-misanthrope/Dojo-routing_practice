import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import GoHome from './components/GoHome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GoHome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/:number' element={<Number />} />
        <Route path='/:word' element={<Word />} />
        <Route path='/:word/:textColor/:bgColor' element={<Word />} />
      </Routes>
      
    </div>
  );
}

export default App;