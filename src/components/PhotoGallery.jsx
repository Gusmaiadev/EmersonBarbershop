import React, { useState } from 'react';
import styles from '../styles/PhotoGallery.module.css'

import photos1 from '../assets/foto1.png'
import photos2 from '../assets/foto2.png'
import photos3 from '../assets/foto3.png'
import photos4 from '../assets/foto4.png'
import photos5 from '../assets/foto5.png'
import photos6 from '../assets/foto6.png'
import photos7 from '../assets/foto7.png'
import photos8 from '../assets/foto8.png'
import photos9 from '../assets/foto9.png'

function PhotoGallery(){
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  return(
    <section className={styles.container_gallery}>
      <div className={styles.column}>
        <img src={photos1} alt="Foto corte" onClick={() => handleImageClick(photos1)} />
        <img src={photos2} alt="Foto corte" onClick={() => handleImageClick(photos2)} />
        <img src={photos3} alt="Foto corte" onClick={() => handleImageClick(photos3)} />
      </div>
      <div className={styles.column}>
        <img src={photos4} alt="Foto corte" onClick={() => handleImageClick(photos4)} />
        <img src={photos5} alt="Foto corte" onClick={() => handleImageClick(photos5)} />
        <img src={photos6} alt="Foto corte" onClick={() => handleImageClick(photos6)} />
      </div>
      <div className={styles.column}>
        <img src={photos7} alt="Foto corte" onClick={() => handleImageClick(photos7)} />
        <img src={photos8} alt="Foto corte" onClick={() => handleImageClick(photos8)} />
        <img src={photos9} alt="Foto corte" onClick={() => handleImageClick(photos9)} />
      </div>
      {expandedImage && (
        <div className={styles.expandedImageOverlay} onClick={handleCloseExpandedImage}>
          <img src={expandedImage} alt="Expanded" className={styles.expandedImage} />
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;