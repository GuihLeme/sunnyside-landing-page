import React from 'react';

import { Container } from './styles';

interface DesignProps {
  width: number;
}

const Design: React.FC<DesignProps> = ({ width }) => {
  return (
    <Container>
      {width <= 700
        ? <img src="/mobile/image-graphic-design.jpg" alt="a cherry" />
        : <img src="/desktop/image-graphic-design.jpg" alt="a cherry" />
      }
      <div className='content'>
        <h1>Graphic Design</h1>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
      </div>
    </Container>
  )
}

export default Design;
