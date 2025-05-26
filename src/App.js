import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <h1>Hello World</h1>
          <div className="navigation">
            <Link to="/hello-michael" className="link">
              <button>Go to Hello Michael</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelloMichael() {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <h1>Hello Michael</h1>
          <div className="navigation">
            <Link to="/" className="link">
              <button>Go Back</button>
            </Link>
          </div>
        </div>
      </div>
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
