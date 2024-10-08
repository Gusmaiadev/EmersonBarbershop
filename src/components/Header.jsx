import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';
import Logo from '../assets/logo.png';
import Close from '../assets/close.png';
import Menu from '../assets/menu.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo_container}>
                        <img className={styles.logo} src={Logo} alt="Logo" />
                    </div>
                    <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                        <ul className={styles.navegation_menu}>
                            <li><Link to="section1" smooth={true} duration={500} onClick={toggleMenu}>SOBRE</Link></li>
                            <li><Link to="section2" smooth={true} duration={500} onClick={toggleMenu}>SERVIÇOS</Link></li>
                            <li><Link to="section3" smooth={true} duration={500} onClick={toggleMenu}>ESTRUTURA</Link></li>
                            <li><Link to="section4" smooth={true} duration={500} onClick={toggleMenu}>BARBEIROS</Link></li>
                            <li><Link to="section5" smooth={true} duration={500} onClick={toggleMenu}>CORTES</Link></li>
                            <li><Link to="section6" smooth={true} duration={500} onClick={toggleMenu}>GALERIA</Link></li>
                            <li><Link to="section7" smooth={true} duration={500} onClick={toggleMenu}>CONTATO</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.box_menu} onClick={toggleMenu}>
                        <img
                            className={styles.menu}
                            src={menuOpen ? Close : Menu}
                            alt={menuOpen ? 'close' : 'menu'}
                        />
                    </div>
                    <div className={styles.button_agendar}>
                        <a target='_blank' href="https://booksy.com/pt-br/30413_emerson-barber-shop_barbearias_1039031_santo-andre?do=invite&_branch_match_id=1327122588941711426&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVDzbLcEwzCjZx8k4CABJnWTAiAAAA#ba_s=seo">
                        <button className={styles.button}>AGENDAR HORÁRIO</button></a>
                    </div>
                </div>
            </header>
            {menuOpen && (
                <div className={styles.menuSidebar}>
                    <ul>
                        <li><Link to="section1" smooth={true} duration={500} onClick={toggleMenu}>SOBRE</Link></li>
                        <li><Link to="section2" smooth={true} duration={500} onClick={toggleMenu}>SERVIÇOS</Link></li>
                        <li><Link to="section3" smooth={true} duration={500} onClick={toggleMenu}>ESTRUTURA</Link></li>
                        <li><Link to="section4" smooth={true} duration={500} onClick={toggleMenu}>BARBEIROS</Link></li>
                        <li><Link to="section5" smooth={true} duration={500} onClick={toggleMenu}>CORTES</Link></li>
                        <li><Link to="section8" smooth={true} duration={500} onClick={toggleMenu}>GALERIA</Link></li>
                        <li><Link to="section7" smooth={true} duration={500} onClick={toggleMenu}>CONTATO</Link></li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
