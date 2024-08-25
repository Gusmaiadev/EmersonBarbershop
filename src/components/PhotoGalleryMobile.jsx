import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styles from '../styles/PhotoGalleryMobile.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import photos1 from '../assets/foto1.png';
import photos2 from '../assets/foto2.png';
import photos3 from '../assets/foto3.png';
import photos4 from '../assets/foto4.png';
import photos5 from '../assets/foto5.png';
import photos6 from '../assets/foto6.png';
import photos7 from '../assets/foto7.png';
import photos8 from '../assets/foto8.png';
import photos9 from '../assets/foto9.png';

function PhotoGalleryMobile({id}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const photos = [photos1, photos2, photos3, photos4, photos5, photos6, photos7, photos8, photos9];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.classList.add(styles.noScroll);
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.classList.remove(styles.noScroll);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, []);

  return (
    <section className={styles.galeryMobi_container} id={id}>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} onClick={() => openModal(photo)}>
            <img src={photo} alt={`Foto corte ${index + 1}`} />
          </div>
        ))}
      </Slider>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <img src={selectedImage} alt="Expanded view" className={styles.modalImage} />
        </div>
      )}
    </section>
  );
}

export default PhotoGalleryMobile;
