import React from "react";

function GalleryItem({ img }) {
  return (
    <figure className="gallery-item">
      <img src={img.src} alt={img.alt} />
    </figure>
  );
}

export default GalleryItem;
