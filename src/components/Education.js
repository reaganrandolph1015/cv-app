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
      <div className="education-container">
        <div className="education-university-container">
          <div className="education-university">
            <div className="education-university-content">
              <Input name="university" placeholder="University of Tampa" />
            </div>
            <div>
              <Input name="school-location" placeholder="Tampa, Florida" />
            </div>
          </div>
          <div className="education-degree">
            <Input name="degree" placeholder="Bachelor of Arts in Phsycology" />
          </div>
        </div>
        <div className="education-date-info-container">
          <div className="attend-date">
            <Input
              name="attendance-date"
              placeholder="Aug, 2021 - Present"
              style={{ textAlign: 'right' }}
            />
          </div>
          <div className="expected-grad-container">
            <div className="eg-eg">
              <p className="expected-grad">Expected Graduation,</p>
            </div>
            <div>
              <Input name="expected-grad" placeholder="Nov, 2026" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
