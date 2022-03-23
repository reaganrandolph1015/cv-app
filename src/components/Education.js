import React from 'react';
import Input from './Input';

function Education() {
  return (
    <div>
      <b>
        <h1>Education</h1>
      </b>
      <div>
        <div>
          <div>
            <Input name="university" placeholder="University of Tampa" /> |
            <Input name="school-location" placeholder="Tampa, Florida" />
          </div>
          <div>
            <Input name="degree" placeholder="Bachelor of Arts in Phsycology" />
          </div>
        </div>
        <div>
          <Input name="attendance-date" placeholder="Aug, 2021 - Present" />
          <div>
            <p>Expected Graduation,</p>
            <Input name="expected-grad" placeholder="Nov, 2026" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
