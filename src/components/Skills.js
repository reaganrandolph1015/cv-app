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
      <ul>
        <li>
          <b>{<Input name="skill" placeholder="Soft Skills: " />} </b>{' '}
          {<Input name="skills" placeholder="Written Communication" />}
        </li>
        <li>
          <b>{<Input name="skill" placeholder="Soft Skills: " />} </b>{' '}
          {<Input name="skills" placeholder="Written Communication" />}
        </li>
        <li>
          <b>{<Input name="skill" placeholder="Soft Skills: " />} </b>{' '}
          {<Input name="skills" placeholder="Written Communication" />}
        </li>
      </ul>
    </div>
  );
}

export default Skills;
