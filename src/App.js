import './App.css';
import Home from './pages/Home';
import Layout from './layout/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
