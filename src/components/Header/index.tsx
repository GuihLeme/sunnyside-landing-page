import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img className='background' src={`/mobile/image-header.jpg`} alt="" />
      <div className='header'>
        <img src="/logo.svg" alt="logo" />

        <input type="checkbox" id="menu_hamburger" />
        <label htmlFor="menu_hamburger">
          <img src="/icon-hamburger.svg" alt="menu" />
        </label>

        <nav>
          <div className='triangle'></div>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Projects</a>
          <button>Contact</button>
        </nav>
      </div>
      <h1>We are creatives</h1>
      <img src="/icon-arrow-down.svg" alt="arrow down" />
    </Container>
  );
}

export default Header;
