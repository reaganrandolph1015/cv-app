import React from 'react';
import Input from './Input';

function Skills() {
  return (
    <div>
      <div>
        <h1>
          <b>Skills</b>
        </h1>
      </div>
      <ul>
        <li>
          <p>
            <b>{<Input name="skill" placeholder="Soft Skills: " />} </b>{' '}
            {<Input name="skills" placeholder="Written Communication" />}
          </p>
        </li>
        <li>
          <p>
            <b>{<Input name="skill" placeholder="Soft Skills: " />} </b>{' '}
            {<Input name="skills" placeholder="Written Communication" />}
          </p>
        </li>
        <li>
          <p>
            <b>{<Input name="skill" placeholder="Soft Skills: " />} </b>{' '}
            {<Input name="skills" placeholder="Written Communication" />}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
