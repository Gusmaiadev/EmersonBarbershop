import styles from '../styles/CardPriceServices.module.css'


function CardPriceServices({titleServiceOne, textServiceOne, priceServiceOne, imageServiceOne , imageServiceTwo, titleServiceTwo, textServiceTwo, priceServiceTwo }){
  return(
    <div className={styles.line_services_prices}>
                <div className={styles.block_one}>
                        <div className={styles.block_image_service}>
                                <img src={imageServiceOne} alt="Corte Social" />
                        </div>
                        <div className={styles.block_price_service}>
                                <h5>{titleServiceOne}</h5>
                                <p>{textServiceOne}</p>
                                <span>{priceServiceOne}</span>
                        </div>
                </div>
                
                        <div className={styles.block_two}>
                                <div className={styles.block_image_service}>
                                        <img src={imageServiceTwo} alt="Corte Social" />
                                </div>
                                <div className={styles.block_price_service}>
                                        <h5>{titleServiceTwo}</h5>
                                        <p>{textServiceTwo}</p>
                                        <span>{priceServiceTwo}</span>
                                </div>
                        </div>
                
</div>
  );
}

export default CardPriceServices;