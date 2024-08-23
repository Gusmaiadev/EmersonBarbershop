import React from 'react';
import styles from '../styles/DataBlockThree.module.css';



function DataBlockThree(){
  return (
    <section className={styles.container_datablockthree}>
        <div className={styles.box_datablockthree}>
          <div className={styles.block_text}>
            <h2>CORTES DE CABELO PARA TODOS OS ESTILOS</h2>
            <p>Na Emerson BarberShop, oferecemos uma variedade 
              de cortes de cabelo, desde o clássico social até o 
              moderno degradê e low fade. Nossa equipe de barbeiros 
              especializados está preparada para realizar o corte 
              perfeito, garantindo qualidade e estilo para todos 
              os tipos de cabelo. Venha descobrir a excelência 
              dos nossos serviços de corte de cabelo.</p>
            <a href="#"><button className={styles.button}>AGENDAR HORÁRIO</button></a>
          </div>
          <div className={styles.block_image}>
        </div>
        </div>
    </section>
  );
};

export default DataBlockThree;
