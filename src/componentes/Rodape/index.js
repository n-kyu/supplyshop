import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />

            Desenvolvido por <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/n-kyu/">Nathan Costa</a>
        </footer>
    )
}

export default Rodape