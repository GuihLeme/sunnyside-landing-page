import React from 'react';

import { Container } from './styles';

const Testimonials: React.FC = () => {
  return (
    <Container>
      <h1>Client Testimonials</h1>

      <div className="testimonials">
        <div className="testimonial">
          <img src="/image-emily.jpg" alt="emily" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
          </p>
          <strong>Emily R.</strong>
          <span>Marketing Director</span>
        </div>

        <div className="testimonial">
          <img src="/image-thomas.jpg" alt="thomas" />
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
          </p>
          <strong>Thomas S.</strong>
          <span>Chief Operating Officer</span>
        </div>

        <div className="testimonial">
          <img src="/image-jennie.jpg" alt="jennie" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
          </p>
          <strong>Jennie F.</strong>
          <span>Bussiness Owner</span>
        </div>
      </div>


    </Container>
  )
}

export default Testimonials;
