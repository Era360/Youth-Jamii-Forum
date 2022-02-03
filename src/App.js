import React from 'react';
import Courses from './components/courses';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Courses />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
