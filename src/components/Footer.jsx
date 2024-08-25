import styles from '../styles/Footer.module.css'

import iconFooter from '../assets/icone_footer.png'
import iconInstagram from '../assets/icone_social_instagram.png'
import iconWhats from '../assets/icone_social_whatsap.png'
import iconEmail from '../assets/icone_social_email.png'

function Footer(){
  return(
    <footer className={styles.container_footer}> 
        <div className={styles.photo_space}>
         ...
        </div>
        <div className={styles.info_footer}>
              <div className={styles.area_info_footer}>
                <div className={styles.block_icon}>
                  <img className={styles.icone_barbershop} src={iconFooter} alt="Icone EmersonBarbershop" />
                </div>
                 <p className={styles.text_icon}>Venha viver a experiência Emerson BarberShop! 
                  Qualidade, estilo e conforto em um só lugar. 
                  Agende sua visita hoje mesmo!</p>   
              </div>
              <div className={styles.area_info_footer}>
                    <h4 className={styles.title_contact}>Contato</h4>
                    <div className={styles.block_social_contact}>
                          <img src={iconInstagram} alt="Icone Instagram" />
                          <p className={styles.social_text}>@emersonbarbershop_</p>
                    </div>
                    <div className={styles.block_social_contact}>
                          <img src={iconWhats} alt="Icone Whatsapp" />
                          <p className={styles.social_text}>(11) 94246-3329</p>
                    </div>
                    <div className={styles.block_social_contact}>
                          <img src={iconEmail} alt="Icone Instagram" />
                          <p className={styles.social_text}>emersonbarbershop@gmail.com</p>
                    </div>
              </div>
              <div className={styles.area_info_footer}>
                    <div className={styles.block_button}>
                            <h4 className={styles.title_button}>AGENDE SEU<br/>HORÁRIO</h4>
                            <a href="#"><button className={styles.button}>AGENDAR HORÁRIO</button></a>
                    </div>
              </div>
        </div>
    </footer>
  );
}


export default Footer;