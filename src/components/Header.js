import React from 'react';
import Input from './Input';

function Header() {
  return (
    <div>
      <div>
        <div>
          <Input name="name" placeholder="Name" />
        </div>
        <Input name="phone" placeholder="XXX-XXX-XXX" symbol="☏" />
        <Input name="email" placeholder="*****@gmail.com" />
        <Input name="website" placeholder="linkedin.com/in/.." />
        <Input name="location" placeholder="Phoenix, AZ" />
      </div>
    </div>
  );
}

export default Header;
