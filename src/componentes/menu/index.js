import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../menu-link';
import styles from './Menu.module.css'

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
                <MenuLink to="/contato">
                    Contato
                </MenuLink>
            </nav>
        </header>
    )
}




export default Menu