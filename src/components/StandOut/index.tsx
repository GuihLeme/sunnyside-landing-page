import React from 'react';

import { Container } from './styles';

interface StandOutProps {
  width: number;
}

const StandOut: React.FC<StandOutProps> = ({ width }) => {
  return (
    <Container>
      {width <= 700
        ? <img src="/mobile/image-stand-out.jpg" alt="a glass cup" />
        : <img src="/desktop/image-stand-out.jpg" alt="a glass cup" />
      }
      <div className='content'>
        <h1>Stand out to the right audience</h1>

        <p>
          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
        </p>

        <a href="/">Learn more</a>
      </div>
    </Container>
  );
}

export default StandOut;
