import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="back-group">
          <a href="#">
            <img className="icon-header" src="https://cdn.glitch.com/8f050b20-90cc-42ee-8638-5a98b4fbd226%2Freturn%201.svg?v=1588696300455" />
            Go back
          </a>
        </div>
        <div>
          <img className="logo-header" src="https://cdn.glitch.com/8f050b20-90cc-42ee-8638-5a98b4fbd226%2Flogo%40256%201.png?v=1588696191845" />
        </div>
        <div>
          <button className="btn">Sign up</button>
        </div>
      </header>
    );
  }
}

export default Header;
