import { useState, useEffect } from 'react';
import styles from '../styles/DataBlockTwo.module.css';
import ImgEstrutura1 from '../assets/estrutura.png';
import ImgEstrutura2 from '../assets/estrutura2.png';
import ImgEstrutura3 from '../assets/estrutura3.png';
import ImgEstrutura4 from '../assets/estrutura4.png';

function DataBlockTwo() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    ImgEstrutura1,
    ImgEstrutura2,
    ImgEstrutura3,
    ImgEstrutura4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container_datablocktwo}>
      <div className={styles.box_datablocktwo}>
        <div
          className={styles.block_image}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
        </div>
        <div className={styles.block_text}>
          <h2>TEMOS UMA ESTRUTURA COMPLETA PARA SEU ATENDIMENTO</h2>
          <p>A Emerson BarberShop conta com uma estrutura moderna e
             equipamentos de primeira linha para proporcionar o melhor
             atendimento aos seus clientes. Cada detalhe é pensado para
             garantir conforto e uma experiência excepcional, assegurando
             que nossos clientes recebam um serviço de qualidade superior
             em um ambiente acolhedor.</p>
          <a href="#"><button className={styles.button}>AGENDAR HORÁRIO</button></a>
        </div>
      </div>
    </section>
  );
}

export default DataBlockTwo;
