import React from 'react';
import Carousel from 'react-material-ui-carousel';

export default function ModalCarousel({img}) {
  return (
    <div className="modal-carousel">
      <Carousel autoPlay={false} indicators={false} timeout={800}>
        {img.map((item, i) => (
          <img key={i} src={item} />
        ))}
      </Carousel>
    </div>
  );
}
