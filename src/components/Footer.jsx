import styles from '../styles/Footer.module.css'

import iconFooter from '../assets/icone_footer.png'
import iconInstagram from '../assets/icone_social_instagram.png'
import iconWhats from '../assets/icone_social_whatsap.png'
import iconEmail from '../assets/icone_social_email.png'

function Footer({id}){
  return(
    <footer className={styles.container_footer} id={id}> 
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
                        <a href="https://www.instagram.com/emersonbarbershop_/"><img src={iconInstagram} alt="Icone Instagram" /></a>
                        <a href="https://www.instagram.com/emersonbarbershop_/"><p className={styles.social_text}>@emersonbarbershop_</p></a>
                    </div>
                    <div className={styles.block_social_contact}>
                          <a href="https://wa.me/5511942463329"><img src={iconWhats} alt="Icone Whatsapp" /></a>
                          <a href="https://wa.me/5511942463329"><p className={styles.social_text}>(11) 94246-3329</p></a>
                    </div>
                    <div className={styles.block_social_contact}>
                          <a href="mailto:emersonbarbershop@gmail.com"><img src={iconEmail} alt="Icone Instagram" /></a>
                          <a href="mailto:emersonbarbershop@gmail.com"><p className={styles.social_text}>emersonbarbershop@gmail.com</p></a>
                    </div>
              </div>
              <div className={styles.area_info_footer}>
                    <div className={styles.block_button}>
                            <h4 className={styles.title_button}>AGENDE SEU<br/>HORÁRIO</h4>
                            <a target='_blank' href="https://booksy.com/pt-br/30413_emerson-barber-shop_barbearias_1039031_santo-andre?do=invite&_branch_match_id=1327122588941711426&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVDzbLcEwzCjZx8k4CABJnWTAiAAAA#ba_s=seo">
                            <button className={styles.button}>AGENDAR HORÁRIO</button></a>
                    </div>
              </div>
        </div>
    </footer>
  );
}


export default Footer;