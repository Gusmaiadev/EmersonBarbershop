import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../styles/DataBlockOne.module.css';

function DataBlockOne({ id }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const satisfactionProps = useSpring({
    number: hasAnimated ? 99 : 0,
    from: { number: 0 },
    config: { duration: 2500 },
  });

  const experienceProps = useSpring({
    number: hasAnimated ? 10 : 0,
    from: { number: 0 },
    config: { duration: 2500 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.container_datablockone} id={id}>
      <div className={styles.box_datablockone}>
        <div className={styles.block_text}>
          <h2>A barbearia que você procura está aqui</h2>
          <p>
            A Emerson BarberShop é renomada pela excelência de seus barbeiros,
            com anos de experiência. Oferecemos serviços de alta qualidade para
            garantir que cada cliente saia satisfeito e confiante com seu novo
            visual. Venha conhecer e experimentar o melhor em cuidados masculinos!
          </p>
          <div className={styles.box_clients}>
            <div className={styles.satisfation_clients}>
              <h3>
                <animated.span>{satisfactionProps.number.to(n => n.toFixed(0))}</animated.span>
                <span className={styles.after}>%</span>
              </h3>
              <h4>Satisfação dos clientes</h4>
            </div>
            <div className={styles.years}>
              <h3>
                <animated.span>{experienceProps.number.to(n => n.toFixed(0))}</animated.span>
                <span className={styles.after}>+</span>
              </h3>
              <h4>anos de experiência</h4>
            </div>
          </div>
        </div>
        <div className={styles.block_image}></div>
      </div>
    </section>
  );
}

export default DataBlockOne;
