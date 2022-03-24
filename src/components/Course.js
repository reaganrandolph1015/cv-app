import React from 'react';
import Input from './Input';

function Course() {
  return (
    <div>
      <div className="sec-title">
        <h1>
          <b>
            Relevant Coursework<hr></hr>
          </b>
        </h1>
      </div>
      <ul>
        <li>
          <Input name="course" placeholder="MATH-1314, College Algebra" />
        </li>
        <li>
          <Input name="course" placeholder="MATH-1314, College Algebra" />
        </li>
        <li>
          <Input name="course" placeholder="MATH-1314, College Algebra" />
        </li>
      </ul>
    </div>
  );
}

export default Course;
