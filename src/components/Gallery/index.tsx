import React from 'react';

import { Container } from './styles';

const Gallery: React.FC = () => {
  return (
    <Container>
      <img src="/mobile/image-gallery-milkbottles.jpg" alt="milkbottles" />
      <img src="/mobile/image-gallery-orange.jpg" alt="orange in a plate" />
      <img src="/mobile/image-gallery-cone.jpg" alt="ice cream cone" />
      <img src="/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes" />
    </Container>
  )
}

export default Gallery;
