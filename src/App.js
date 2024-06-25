import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import MovieDea from './component/MovieDea';
import Setbook from './component/Setbook';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/book/:mid" element={<MovieDea />} />
        <Route path="/setbook" element={<Setbook />} />
      </Routes>
    </>
  );
}

export default App;
