import React from 'react';
import Input from './Input';

function Extra() {
  return (
    <div className="extra-container">
      <div className="extra-title">
        <h1>
          <Input
            className="sec-title-extra-input"
            name="extra-title"
            placeholder="Extra"
          />
          <hr></hr>
        </h1>
      </div>
      <div className="extra-content">
        <Input name="extra-content" placeholder="Enter here" />
      </div>
    </div>
  );
}

export default Extra;
