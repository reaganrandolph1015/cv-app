import React from 'react';
import Input from './Input';

function Skills() {
  return (
    <div>
      <div className="sec-title">
        <h1>
          <b>
            Skills<hr></hr>
          </b>
        </h1>
      </div>
      <ul className="remove-bullet">
        <li>
          {
            <Input
              name="skill"
              placeholder="Soft Skills: Written Communication"
            />
          }
        </li>
        <li>
          {
            <Input
              name="skill"
              placeholder="Soft Skills: Written Communication"
            />
          }
        </li>
        <li>
          {
            <Input
              name="skill"
              placeholder="Soft Skills: Written Communication"
            />
          }
        </li>
      </ul>
    </div>
  );
}

export default Skills;
