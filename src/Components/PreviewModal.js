import React from 'react';

const PreviewModal = ({ image, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default PreviewModal;
