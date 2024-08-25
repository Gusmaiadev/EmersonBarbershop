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

    useEffect(() => {
        // Adiciona a classe no-scroll ao body quando o menu está aberto
        if (menuOpen) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }

        // Remove a classe no-scroll quando o componente é desmontado
        return () => {
            document.body.classList.remove(styles.noScroll);
        };
    }, [menuOpen]);

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
                            <li><Link to="section5" smooth={true} duration={500} onClick={toggleMenu}>GALERIA</Link></li>
                            <li><Link to="section6" smooth={true} duration={500} onClick={toggleMenu}>CONTATO</Link></li>
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
                        <a href="#"><button className={styles.button}>AGENDAR HORÁRIO</button></a>
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
                        <li><Link to="section5" smooth={true} duration={500} onClick={toggleMenu}>GALERIA</Link></li>
                        <li><Link to="section6" smooth={true} duration={500} onClick={toggleMenu}>CONTATO</Link></li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
