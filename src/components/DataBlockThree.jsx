import React from 'react';
import styles from '../styles/DataBlockThree.module.css';



function DataBlockThree({id}){
  return (
    <section className={styles.container_datablockthree} id={id}>
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
            <a target='_blank' href="https://booksy.com/pt-br/30413_emerson-barber-shop_barbearias_1039031_santo-andre?do=invite&_branch_match_id=1327122588941711426&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVDzbLcEwzCjZx8k4CABJnWTAiAAAA#ba_s=seo">
            <button className={styles.button}>AGENDAR HORÁRIO</button></a>
          </div>
          <div className={styles.block_image}>
        </div>
        </div>
    </section>
  );
};

export default DataBlockThree;
