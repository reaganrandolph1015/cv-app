import React from 'react';
import Input from './Input';

function Experience() {
  return (
    <div>
      <div className="sec-title">
        <h1>
          <b>
            Experience<hr></hr>
          </b>
        </h1>
      </div>
      <div>
        <div>
          <ul>
            <li>
              {<Input name="job-company" placeholder="Amazon" />} |
              {<Input name="job-location" placeholder="Manga, FL" />}
              {<Input name="job-date" placeholder="Feb 2020 - Present" />}
              <ul>
                <li>{<Input name="job-info" />}</li>
                <li>{<Input name="job-info" />}</li>
              </ul>
            </li>
            <li>
              {<Input name="job-company" placeholder="Amazon" />} |
              {<Input name="job-location" placeholder="Mango, FL" />}
              {<Input name="job-date" placeholder="Feb 2020 - Present" />}
              <ul>
                <li>{<Input name="job-info" />}</li>
                <li>{<Input name="job-info" />}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
