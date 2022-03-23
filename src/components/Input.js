import React, { useState } from 'react';

const Input = () => {
  // state to store value from inputs
  const [inputValue, setInputValue] = useState('');
  const [showButtons, setShowButtons] = useState(true);

  // clears input value and hides edit buttons
  const ClearButton = () => {
    setInputValue('');
    setShowButtons(false);
  };

  // holds buttons to edit input
  const EditButtons = () => (
    <div>
      <button onClick={() => setShowButtons(false)}>Enter</button>
      <button onClick={() => ClearButton()}>Clear</button>
    </div>
  );

  return (
    <div onDoubleClick={() => setShowButtons(true)}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {showButtons ? <EditButtons /> : null}
    </div>
  );
};

export default Input;
