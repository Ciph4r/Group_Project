import React from 'react';
import Modal from 'react-modal';
import '../css/cardModal.scss';

export default function CardModal({ openModal, closeModal, data }) {
  const { img, year, make, model, price } = data;
  console.log({ openModal });

  return (
    <Modal isOpen={openModal}>
      <div className="close-modal">
        <button onClick={closeModal}>close</button>
      </div>
      <div className="card-modal">
        <img src={img} alt="..." />
        <div className="info">
          <h1>
            {year} {make} {model}
          </h1>
          <h3>{price} per day</h3>
          <p>Description of the car.</p>
        </div>
      </div>
    </Modal>
  );
}
