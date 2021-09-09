import React from 'react';

import { Container } from './styles';

const Transform: React.FC = () => {
  return (
    <Container>
      <div className='content'>
        <h1>Transform your brand</h1>
        <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <a href="/">Learn more</a>
      </div>
      <img src="/mobile/image-transform.jpg" alt="egg" />
    </Container>
  );
}

export default Transform;
