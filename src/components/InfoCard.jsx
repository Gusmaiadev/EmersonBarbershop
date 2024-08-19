import styles from '../styles/InfoCard.module.css';
import IconCorteSocial from '../assets/icone_corte_social.png';
import IconBarba from '../assets/icone_barba.png';
import IconCorteDegrade from '../assets/icone_corte_degrade.png';
import IconCortePenteado from '../assets/icone_corte_penteado.png';
import IconSobrancelha from '../assets/icone_sobrancelha.png';
import IconTintura from '../assets/icone_tintura.png';


function InfoCard(){
    return(
        <section className={styles.container_infocard}>
            <div className={styles.box_infocard}>
                <h3>Navegue pelo nosso serviços</h3>
                <p>A Emerson BarberShop é conhecida pela alta 
                qualidade dos serviços prestados por barbeiros experientes,
                garantindo satisfação e confiança a cada cliente.</p>
                <div className={styles.card_prices}>
                        <div className={styles.line_services_prices}>
                                <div className={styles.block_one}>
                                        <div className={styles.block_image_service}>
                                                ...
                                        </div>
                                        <div className={styles.block_price_service}>
                                                ...
                                        </div>
                                </div>
                                <div className={styles.block_two}>
                                        <div className={styles.block_one}>
                                                <div className={styles.block_image_service}>
                                                        ...
                                                </div>
                                                <div className={styles.block_price_service}>
                                                        ...
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default InfoCard;