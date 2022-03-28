import React, { useState } from 'react';
import '../styles/Style.css';

function Input(props) {
  const [inputValue, setInputValue] = useState('');
  const [showClear, setShowClear] = useState(false);

  const renderClear = () => {
    return (
      <button className="clear-btn" onMouseDown={clearInput}>
        ❌
      </button>
    );
  };

  const clearInput = () => {
    setInputValue('');
    setShowClear(false);
    console.log('Cleared');
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div>
        <h2>{props.symbol}</h2>
      </div>
      <fieldset>
        <div className="input-field-container">
          <input
            onBlur={() => setShowClear(false)}
            name={props.name}
            className={props.className}
            type="text"
            style={props.style}
            placeholder={props.placeholder}
            value={inputValue}
            onChange={handleInput}
            onClick={() => setShowClear(true)}
          />
          {showClear ? renderClear() : null}
        </div>
      </fieldset>
    </div>
  );
}

export default Input;
