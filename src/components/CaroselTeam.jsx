import React, { useState, useEffect, useRef } from 'react';
import Hammer from 'hammerjs';
import styles from '../styles/CaroselTeam.module.css';

import EmersonPhoto from '../assets/foto_emerson.png';
import CleitonPhoto from '../assets/foto_cleiton.png';
import DanielPhoto from '../assets/foto_daniel.png';
import DanPhoto from '../assets/foto_dan.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function CaroselTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const interactionTimeoutRef = useRef(null);

  const slides = [
    {
      image: EmersonPhoto,
      text: 'Emerson',
      button1: 'Instagram',
      button2: 'Marcar horário'
    },
    {
      image: CleitonPhoto,
      text: 'Cleitinho',
      button1: 'Instagram',
      button2: 'Marcar horário'
    },
    {
      image: DanielPhoto,
      text: 'Daniel',
      button1: 'Instagram',
      button2: 'Marcar horário'
    },
    {
      image: DanPhoto,
      text: 'Dan',
      button1: 'Instagram',
      button2: 'Marcar horário'
    }
  ];

  // Função para ir ao próximo slide
  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Função para ir ao slide anterior
  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Configura o intervalo automático de 3 segundos
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      next();
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  // Reinicia o modo automático 5 segundos após a última interação do usuário
  const resetInteractionTimeout = () => {
    clearTimeout(interactionTimeoutRef.current);
    stopAutoSlide();
    interactionTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide(); // Inicia o modo automático ao carregar

    return () => {
      stopAutoSlide();
      clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  // Configura o Hammer.js para capturar os gestos de swipe
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

  return (
    <section className={styles.box_carosel}>
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
                className={`
                  ${styles.slide} 
                  ${index === activeIndex ? styles.act : ''} 
                  ${index === (activeIndex - 1 + slides.length) % slides.length ? styles.prev : ''} 
                  ${index === (activeIndex + 1) % slides.length ? styles.next : ''}
                  ${index === (activeIndex + 2) % slides.length ? styles.newNext : ''}
                  ${index % 2 === 0 ? styles.redCard : styles.blueCard}
                `}
                onClick={() => {
                  if (index === (activeIndex + 1) % slides.length) next();
                  if (index === (activeIndex - 1 + slides.length) % slides.length) prev();
                  resetInteractionTimeout();
                }}
              >
                <img src={slide.image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
                <div className={styles.slideText}>{slide.text}</div>
                <div className={styles.slideButtons}>
                  <button className={styles.instagramButton}>
                    {slide.button1}
                    <FontAwesomeIcon icon={faInstagram} className={styles.instagramIcon} />
                  </button>
                  <button>{slide.button2}</button>
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
