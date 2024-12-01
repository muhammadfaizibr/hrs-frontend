import './App.css';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './layout/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listings from './pages/Listings';
import AddNewPlace from './components/AddNewPlace';
import Details from './pages/Details';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listing-hotels" element={<Listings choice='Hotels' />} />
        <Route path="/listing-attractions" element={<Listings choice='Attractions' />} />
        <Route path="/add-place" element={<AddNewPlace/>} />
        <Route path="/details" element={<Details/>} />
        
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
