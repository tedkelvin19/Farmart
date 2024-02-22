import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<SignIn/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
