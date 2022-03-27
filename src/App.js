import React, { useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Course from './components/Course';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Extra from './components/Extra';

function App() {
  const [showBtns, setShowBtns] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowBtns(false);
  };

  const btn = () => {
    return (
      <div className="form-buttons">
        <button type="submit">✅</button>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} onDoubleClick={() => setShowBtns(true)}>
        {<Header />}
        {<Education />} {<Course />} {<Skills />} {<Experience />}
        {<Extra />}
        {showBtns ? btn() : null}
      </form>
    </div>
  );
}

export default App;
