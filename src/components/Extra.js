import React from 'react';
import Input from './Input';

function Extra() {
  return (
    <div>
      <div>
        <h1>
          <b>
            <Input
              className="sec-title-extra-input"
              name="extra-title"
              placeholder="Extra"
            />
            <hr></hr>
          </b>
        </h1>
      </div>
      <div>
        <Input name="extra-cont" placeholder="Enter here" />
      </div>
    </div>
  );
}

export default Extra;
