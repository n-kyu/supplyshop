import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./Contato.module.css";

function Contato() {
  return (
    <>
      <div className={styles.contatoCard}>

        <div className={styles.contatoTitle}>
          <h1>Contato Supplyshop</h1>
        </div>

        <div>            
          <BotaoPrincipal tamanho="contato">
            <a href="https://web.whatsapp.com/send?phone=5571996328082" target="_blank" rel="noreferrer" >Whatsapp </a>
            </BotaoPrincipal>

          <BotaoPrincipal tamanho="contato">
            <a href="mailto:ronaldfornecedor@hotmail.com">Email</a>
          </BotaoPrincipal>          
        
          <h2>Estamos localizados em:</h2>
          <p className={styles.endereco}>
            Av.Estados Unidos 06 - Comércio -Salvador - Bahia - Cep: 40.140-040{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Contato;
