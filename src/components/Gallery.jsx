import cuid from "cuid";
import React from "react";
import GalleryItem from "./GalleryItem";

const imgList = [
  {
    src: "img/gallery/gallery-1.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-2.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-3.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-4.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-5.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-6.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-7.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-8.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-9.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-10.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-11.jpg",
    alt: "Photo of beautifully arranged food",
  },
  {
    src: "img/gallery/gallery-12.jpg",
    alt: "Photo of beautifully arranged food",
  },
];

function Gallery() {
  return (
    <div className="gallery">
      {imgList.map(function(img) {
        return <GalleryItem key={cuid()} img={img} />;
      })}
    </div>
  );
}

export default Gallery;
