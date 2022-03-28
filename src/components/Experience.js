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
          <ul className="job-ul">
            <li>
              <div className="job-header-container">
                <div className="job-company-location-container">
                  <div className="job-company-input">
                    {<Input name="job-company" placeholder="Amazon" />}
                  </div>
                  {<Input name="job-location" placeholder="Manga, FL" />}
                </div>
                {
                  <Input
                    name="job-date"
                    placeholder="Feb 2020 - Present"
                    style={{ textAlign: 'right' }}
                  />
                }
              </div>
              <ul className="job-info">
                <li>{<Input name="job-info" />}</li>
                <li>{<Input name="job-info" />}</li>
              </ul>
            </li>
            <li>
              <div className="job-header-container">
                <div className="job-company-location-container">
                  <div className="job-company-input">
                    {<Input name="job-company" placeholder="Amazon" />}{' '}
                  </div>
                  {<Input name="job-location" placeholder="Mango, FL" />}
                </div>
                {
                  <Input
                    name="job-date"
                    placeholder="Feb 2020 - Present"
                    style={{ textAlign: 'right' }}
                  />
                }
              </div>
              <ul className="job-info">
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
