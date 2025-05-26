import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Hello World</h1>
      <Link to="/hello-michael">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Go to Hello Michael</button>
      </Link>
    </div>
  );
}

function HelloMichael() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Hello Michael</h1>
      <Link to="/">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Go Back</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello-michael" element={<HelloMichael />} />
      </Routes>
    </Router>
  );
}

export default App;
