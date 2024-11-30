import './App.css';

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
