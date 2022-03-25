import React from 'react';
import Input from './Input';

function Extra() {
  return (
    <div className="extra-container">
      <div className="extra-title">
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
      <div className="extra-cont">
        <Input name="extra-cont" placeholder="Enter here" />
      </div>
    </div>
  );
}

export default Extra;
