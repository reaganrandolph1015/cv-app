import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Course from './components/Course';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <form>
        {<Header />} {<Education />} {<Course />} {<Skills />}
      </form>
    </div>
  );
}

export default App;
