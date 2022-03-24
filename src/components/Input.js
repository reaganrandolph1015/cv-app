import React from 'react';
import '../styles/Style.css';

function Input(props) {
  return (
    <div>
      <div>
        <h2>{props.symbol}</h2>
      </div>
      <fieldset>
        <input
          className={props.className}
          name={props.name}
          type="text"
          placeholder={props.placeholder}
        />
      </fieldset>
    </div>
  );
}

export default Input;
