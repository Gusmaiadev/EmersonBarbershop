import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/DataBlockOne.module.css';
import CountUp from 'react-countup';

function DataBlockOne() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect(); // Desconecta o observer após a animação para evitar que seja disparada novamente
        }
      },
      { threshold: 0.8 } // Quando 50% da seção estiver visível, dispara a animação
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
    <section ref={sectionRef} className={styles.container_datablockone}>
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
                {hasAnimated && <CountUp start={0} end={98} duration={2.5} />}
                <span className={styles.after}>%</span>
              </h3>
              <h4>Satisfação dos clientes</h4>
            </div>
            <div className={styles.years}>
              <h3>
                {hasAnimated && <CountUp start={0} end={10} duration={2.5} />}
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
