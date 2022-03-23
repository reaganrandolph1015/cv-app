import React from 'react';
import Input from './Input';

function Extra() {
  return (
    <div>
      <div>
        <h1>
          <b>
            <Input name="extra-title" placeholder="Extra" />
          </b>
        </h1>
      </div>
      <div>
        <Input name="extra-cont" />
      </div>
    </div>
  );
}

export default Extra;
