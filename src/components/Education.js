import React from 'react';
import Input from './Input';
import '../styles/Style.css';

function Education() {
  return (
    <div>
      <div className="sec-title">
        <b>
          <h1>
            Education<hr></hr>
          </h1>
        </b>
      </div>
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
        <div className="education-date-info-container">
          <div className="attend-date">
            <Input name="attendance-date" placeholder="Aug, 2021 - Present" />
          </div>
          <div className="expected-grad-container">
            <div className="eg-eg">
              <p className="expected-grad">Expected Graduation,</p>
            </div>
            <div className="eg-input">
              <Input name="expected-grad" placeholder="Nov, 2026" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
