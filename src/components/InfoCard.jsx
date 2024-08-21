import React from 'react';
import styles from '../styles/InfoCard.module.css';
import services from '../data/services.json';

import CardPrices from './CardPriceServices.jsx';
import IconCorteSocial from '../assets/icone_corte_social.png';
import IconBarba from '../assets/icone_barba.png';
import IconCorteDegrade from '../assets/icone_corte_degrade.png';
import IconCortePenteado from '../assets/icone_corte_penteado.png';
import IconSobrancelha from '../assets/icone_sobrancelha.png';
import IconTintura from '../assets/icone_tintura.png';

function InfoCard() {
    return (
        <section className={styles.container_infocard}>
            <div className={styles.box_infocard}>
                <h3>Navegue pelos nossos<br/>serviços</h3>
                <p className={styles.infocard_text}>A Emerson BarberShop é conhecida pela alta 
                qualidade dos serviços prestados por barbeiros experientes,
                garantindo satisfação e confiança a cada cliente.</p>
                <div className={styles.card_prices}>
                    {/* Primeiro conjunto de serviços */}
                    <CardPrices
                        titleServiceOne={services[0].titleServiceOne}
                        textServiceOne={services[0].textServiceOne}
                        priceServiceOne={services[0].priceServiceOne}
                        imageServiceOne={IconCorteSocial}  // Imagem só passada aqui
                        titleServiceTwo={services[0].titleServiceTwo}
                        textServiceTwo={services[0].textServiceTwo}
                        priceServiceTwo={services[0].priceServiceTwo}
                        imageServiceTwo={IconCortePenteado}  // Imagem só passada aqui
                    />
                    
                    {/* Segundo conjunto de serviços */}
                    <CardPrices
                        titleServiceOne={services[1].titleServiceOneColTwo}
                        textServiceOne={services[1].textServiceOneColTwo}
                        priceServiceOne={services[1].priceServiceOneColTwo}
                        imageServiceOne={IconCorteDegrade}  // Imagem só passada aqui
                        titleServiceTwo={services[1].titleServiceTwoColTwo}
                        textServiceTwo={services[1].textServiceTwoColTwo}
                        priceServiceTwo={services[1].priceServiceTwoColTwo}
                        imageServiceTwo={IconSobrancelha}  // Imagem só passada aqui
                    />
                    
                    {/* Terceiro conjunto de serviços */}
                    <CardPrices
                        titleServiceOne={services[2].titleServiceOneColThree}
                        textServiceOne={services[2].textServiceOneColThree}
                        priceServiceOne={services[2].priceServiceOneColThree}
                        imageServiceOne={IconTintura}  // Imagem só passada aqui
                        titleServiceTwo={services[2].titleServiceTwoColThree}
                        textServiceTwo={services[2].textServiceTwoColThree}
                        priceServiceTwo={services[2].priceServiceTwoColThree}
                        imageServiceTwo={IconBarba}  // Imagem só passada aqui
                    />
                </div>
            </div>
        </section>
    );
}

export default InfoCard;
