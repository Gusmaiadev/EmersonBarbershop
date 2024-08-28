import React, { useState, useEffect, useRef } from 'react';
import Hammer from 'hammerjs';
import styles from '../styles/CaroselTeam.module.css';

import EmersonPhoto from '../assets/foto_emerson.png';
import CleitonPhoto from '../assets/foto_cleiton.png';
import DanielPhoto from '../assets/foto_daniel.png';
import DanPhoto from '../assets/foto_dan.png';
import TiagoPhoto from '../assets/foto_tiago.png';
import JacksonPhoto from '../assets/foto_jakson.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function CaroselTeam({id}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const interactionTimeoutRef = useRef(null);

  const slides = [
    {
      image: EmersonPhoto,
      text: 'Emerson',
      button1: 'Instagram',
      button2: 'Marcar horário',
      link1: 'https://www.instagram.com/emersonbarbershop_/',
      link2: 'https://booksy.com/pt-br/30413_emerson-barber-shop_barbearias_1039031_santo-andre/staffer/49572#ba_s=seo'
    },
    {
      image: CleitonPhoto,
      text: 'Cleitinho',
      button1: 'Instagram',
      button2: 'Marcar horário',
      link1: 'https://www.instagram.com/cleyton.p.sousa/',
      link2: 'https://booksy.com/pt-br/30413_emerson-barber-shop_barbearias_1039031_santo-andre/staffer/222888#ba_s=seo'
    },
    {
      image: DanielPhoto,
      text: 'Daniel',
      button1: 'Instagram',
      button2: 'Marcar horário',
      link1: 'https://www.instagram.com/____d.araujo09/',
      link2: 'https://booksy.com/pt-br/30413_emerson-barber-shop_barbearias_1039031_santo-andre/staffer/53570#ba_s=seo'
    },
    {
      image: DanPhoto,
      text: 'Dan',
      button1: 'Instagram',
      button2: 'Marcar horário',
      link1: 'https://www.instagram.com/d4n.bernd/',
      link2: 'https://booksy.com/pt-br/30413_emerson-barber-shop_barbearias_1039031_santo-andre/staffer/359961#ba_s=seo'
    },
    {
      image: TiagoPhoto,
      text: 'Tiago',
      button1: 'Instagram',
      button2: 'Marcar horário',
      link1: 'https://www.instagram.com/tgoaraujo_/',
      link2: 'https://booksy.com/pt-br/30413_emerson-barber-shop_barbearias_1039031_santo-andre/staffer/tiago'
    },
    {
      image: JacksonPhoto,
      text: 'Jackson',
      button1: 'Instagram',
      button2: 'Marcar horário',
      link1: 'https://www.instagram.com/jackson.markes.98/',
      link2: 'https://booksy.com/pt-br/30413_emerson-barber-shop_barbearias_1039031_santo-andre/staffer/jackson'
    }
  ];

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      next();
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const resetInteractionTimeout = () => {
    clearTimeout(interactionTimeoutRef.current);
    stopAutoSlide();
    interactionTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
      clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  const swipeRef = useRef(null);
  useEffect(() => {
    if (!swipeRef.current) return;

    const hammer = new Hammer(swipeRef.current);
    hammer.on('swipeleft', () => {
      next();
      resetInteractionTimeout();
    });
    hammer.on('swiperight', () => {
      prev();
      resetInteractionTimeout();
    });

    return () => {
      hammer.destroy();
    };
  }, []);

  const getSlidePosition = (index) => {
    const position = (index - activeIndex + slides.length) % slides.length;
    if (position === 0) return styles.act;
    if (position === 1) return styles.next;
    if (position === slides.length - 1) return styles.prev;
    return '';
  };

  return (
    <section className={styles.box_carosel} id={id}>
      <div className={styles.title_text}>
        <h2 className={styles.title}>
          <span className={styles.title_blue}>CONHEÇA</span>
          <span className={styles.title_red}> NOSSOS</span>
          <br />
          BARBEIROS
        </h2>
      </div>
      <div className={styles.block_bg}>
        <div className={styles.carouselContainer} ref={swipeRef}>
          <div className={styles.list}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${styles.slide} 
                  ${getSlidePosition(index)}
                  ${index % 2 === 0 ? styles.redCard : styles.blueCard}`}
                onClick={() => {
                  if (getSlidePosition(index) === styles.next) next();
                  if (getSlidePosition(index) === styles.prev) prev();
                  resetInteractionTimeout();
                }}
              >
                <img src={slide.image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
                <div className={styles.slideText}>{slide.text}</div>
                <div className={styles.slideButtons}>
                  <a href={slide.link1} target="_blank" rel="noopener noreferrer">
                    <button className={styles.instagramButton}>
                      {slide.button1}
                      <FontAwesomeIcon icon={faInstagram} className={styles.instagramIcon} />
                    </button>
                  </a>
                  <a href={slide.link2} target="_blank" rel="noopener noreferrer">
                    <button>{slide.button2}</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaroselTeam;