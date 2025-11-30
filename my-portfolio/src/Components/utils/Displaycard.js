import React from 'react';

export const Displaycard = ({ title, description, image, link }) => {
  return (
    <div className="card h-100 shadow-sm">
      {/* Thumbnail */}
      <img
        src={image}
        alt={title}
        className="card-img-top p-2"
        style={{ height: "300px", objectFit: "cover" }}
      />

      {/* Content */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};