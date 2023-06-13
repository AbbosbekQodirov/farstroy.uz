import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Carusel({ images, showbar, showNav, showBullets }) {
  return (
    <>
      <ImageGallery
        showThumbnails={showbar}
        items={images}
        showPlayButton={true}
        autoPlay={true}
        showNav={showNav}
        showBullets={showBullets}
      />
    </>
  );
}
export default Carusel;
