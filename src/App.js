import React, { useState } from 'react';
import Courses from './components/courses';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from './components/course';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [course, setCourse] = useState();

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Courses selectCourse={(cour) => setCourse(cour)} />} path="/" />
          <Route element={<Course course={course} />} path="/course" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
