
import styles from '../styles/Banner.module.css';
import IconLocal from '../assets/icone_endereco.png';
import IconTel  from '../assets/icone_telefone.png' 
import IconRelo  from '../assets/icone_relogio.png' 


function Banner(){

    return (
        <>
            <div className={styles.container_banner}>
                <div className={styles.container_space}>
                    <div className={styles.container_vazio}></div>
                      <div className={styles.text_atrativo}>
                            <div className={styles.space_one}>
                                  <p className={styles.title_banner}>ESTILO É UM REFLEXO DA</p>
                                  <p className={styles.title_banner}>SUA ATITUDE E SUA</p>
                                  <p className={styles.title_banner}> PERSONALIDADE</p>
                            </div>
                            
                            <div className={styles.space_two}>
                                  <p className={styles.text_banner}>Deixe seu visual nas mãos de especialistas que</p>
                                  <p className={styles.text_banner}>entendem e valorizam sua identidade</p>
                            </div>  
                      </div>
                </div>
                <div className={styles.container_info}>
                    <div className={styles.box_info}>
                        <div className={styles.card_info}>
                                <img src={IconLocal} alt="Local"/>
                                <h2>ENDEREÇO</h2>
                        </div>
                        <div className={styles.card_info}>
                                <img src={IconTel} alt="Telefone"/>
                                <h2>TELEFONE</h2>
                        </div>
                        <div className={styles.card_info}>
                                <img src={IconRelo} alt="Relogio"/>
                                <h2>HORÁRIO</h2>
                        </div>
                    </div>
                    <div className={styles.box_descr}>
                        <div className={styles.card_data}>
                                <p>R. AMAZONAS, 06 - CIDADE SÃO JORGE, SANTO ANDRÉ</p>
                            </div>
                            <div className={styles.card_data}>
                                <p>(11)94246-3329</p>
                            </div>
                            <div className={styles.card_data}>
                                <p>DE TERÇA-FEIRA Á SÁBADO - DAS 9H ÁS 20H</p>
                            </div> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
