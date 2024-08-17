
import styles from '../styles/Banner.module.css';


function Banner() {
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
                        ...
                </div>
            </div>
        </>
    );
}

export default Banner;
