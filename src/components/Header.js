import React from 'react';
import Input from './Input';
import '../styles/Style.css';

function Header() {
  return (
    <div className="header-bg">
      <div className="header-container">
        <div className="head-name">
          <Input className="name-input" name="name" placeholder="Name" />
        </div>
        <div className="header-content">
          <div className="header-input-logo">
            <div className="header-logo">☏</div>
            <div>
              <Input name="phone" placeholder="XXX-XXX-XXXX" />
            </div>
          </div>
          <div className="header-input-logo">
            <div className="header-logo">✉</div>
            <div>
              <Input name="email" placeholder="*****@gmail.com" />
            </div>
          </div>
          <div>
            <div className="header-input-logo">
              <div className="header-logo">🌐</div>
              <Input name="website" placeholder="linkedin.com/in/.." />
            </div>
          </div>
          <div>
            <div className="header-input-logo">
              <div className="header-logo">📍</div>
              <Input name="location" placeholder="Phoenix, AZ" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
