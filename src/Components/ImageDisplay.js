import React from 'react';

const ImageDisplay = ({ images, onImageClick }) => (
  <div className="image-grid">
    {images.map((image) => (
      <div key={image.id} className="image-item" onClick={() => onImageClick(image)}>
        <img src={image.url} alt={image.title} />
        <p>{image.title}</p>
      </div>
    ))}
  </div>
);

export default ImageDisplay;
