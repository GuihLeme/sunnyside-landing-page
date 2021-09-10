import React from 'react';

import { Container } from './styles';

interface PhotographyProps {
  width: number;
}

const Photography: React.FC<PhotographyProps> = ({ width }) => {
  return (
    <Container>
      {width <= 700
        ? <img src="/mobile/image-photography.jpg" alt="an orange" />
        : <img src="/desktop/image-photography.jpg" alt="an orange" />
      }
      <div className='content'>
        <h1>Photography</h1>
        <p>Increase your  credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
    </Container>
  )
}

export default Photography;
