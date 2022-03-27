import React, { useState } from 'react';
import '../styles/Style.css';

function Input(props) {
  const [inputValue, setInputValue] = useState('');
  const [showClear, setShowClear] = useState(false);

  const renderClear = () => {
    return <button onClick={clearInput}>❌</button>;
  };

  const clearInput = () => {
    setInputValue('');
    setShowClear(false);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-field-container">
      <div>
        <h2>{props.symbol}</h2>
      </div>
      <fieldset>
        <input
          name={props.name}
          type="text"
          placeholder={props.placeholder}
          value={inputValue}
          onChange={handleInput}
          onClick={() => setShowClear(true)}
        />
        {showClear ? renderClear() : null}
      </fieldset>
    </div>
  );
}

export default Input;
