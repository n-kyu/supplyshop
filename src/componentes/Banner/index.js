import styles from './Banner.module.css'
import circuloColorido from 'assets/logo_avatar.png'
import minhaFoto from 'assets/minha_foto.png'


function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                   Supplyshop
                </h1>
                <p className={styles.paragrafo}>
                Tudo que sua embarcação precisa em um só lugar!
                </p>
                <p className={styles.paragrafosm}>
                Faça sua cotação entrando em contato.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=''
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Perfil"
                />
            </div>            
        </div>
    )
}

export default Banner