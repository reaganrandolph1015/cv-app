import React from 'react';
import '../styles/Style.css';

function Input(props) {
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log('User submitted.');
  };

  return (
    <div>
      <div>
        <h2>{props.symbol}</h2>
      </div>
      <fieldset>
        <input name={props.name} type="text" placeholder={props.placeholder} />
      </fieldset>
    </div>
  );
}

export default Input;
