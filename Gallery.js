// Gallery.js

import React from 'react';
import './Gallery.css';

const Gallery = ({ data }) => {
  return (
    <div className="gallery-container">
      {data.map((photo) => (
        <img
          key={photo.id}
          src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          alt={photo.title}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default Gallery;
