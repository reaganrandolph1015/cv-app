import React, { useState } from 'react';

const Editable = ({
  // possible fields for user/creator editing
  text,
  type,
  placeholder,
  children,
  ...props
}) => {
  // manage state to show label(default) or user input
  const [isEditing, setEditing] = useState(false);

  // event handler while pressing key and editing
  const handleKeyDown = (event, type) => {
    // handle when key pressed
  };

  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span>{text || placeholder || 'Editable content'}</span>
        </div>
      )}
    </section>
  );
};

export default Editable;
