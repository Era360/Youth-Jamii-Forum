import React, { useState } from 'react';
import Courses from './components/courses';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDescription from './components/course_description';
import Course from './components/course';

function App() {
  const [course, setCourse] = useState();

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Courses selectCourse={(cour) => setCourse(cour)} />} path="/" />
          <Route exact element={<CourseDescription course={course} />} path="/course_description" />
          <Route exact element={<Course course={course} />} path="/course_description/course" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
