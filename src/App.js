import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Course from './components/Course';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Extra from './components/Extra';

function App() {
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log('User submitted.');
  };

  return (
    <div className="wrapper">
      <form onSubmit={HandleSubmit}>
        {<Header />} {<Education />} {<Course />} {<Skills />} {<Experience />}
        {<Extra />}
        <div className="form-buttons">
          <button>Edit</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
