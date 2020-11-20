import React from 'react';
import Carousel from 'react-material-ui-carousel';

export default function ModalCarousel() {
  const items = [
    {
      imgSrc:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
    },
    {
      imgSrc:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
    },
    {
      imgSrc:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
    },
    {
      imgSrc:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
    },
  ];

  return (
    <div className="modal-carousel">
      <Carousel autoPlay={false} indicators={false} timeout={800}>
        {items.map((item, i) => (
          <img key={i} src={item.imgSrc} />
        ))}
      </Carousel>
    </div>
  );
}
