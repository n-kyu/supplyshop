import styles from './BotaoPrincipal.module.css';

function BotaoPrincipal({ children, tamanho, contato }) {
    return (
        <button className={
            `${styles.botaoPrincipal}
            ${styles[tamanho]}
            ${styles[contato]}           
        `}>
            {children}
        </button>
    )
}

export default BotaoPrincipal