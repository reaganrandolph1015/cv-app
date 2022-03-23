import React from 'react';
import '../styles/Style.css';

function Header() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User submitted.');
  };

  return (
    <div className="wrapper">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input name="name" placeholder="Name" />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Header;
