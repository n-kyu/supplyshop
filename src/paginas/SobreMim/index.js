import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";
import fotoCapa from "assets/sobre_mim_capa.png";

function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Ronald!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Ronald"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        A Supplyshop Fornecedora de materiais em geral, foi fundada em 2011 já
        com uma vasta experiência de 20 anos de fornecimento de bordo a navios,
        rebocadores do seu administrador o Senhor Ronald Silva e com a principal
        missão de levar o que há de melhor em produtos com preços justos no que
        se refere a abastecimento de suprimentos para navios nacionais e
        internacionais.
        </p>
        <p className={styles.paragrafo}>
        Estamos situados à Av. Estados Unidos Nº 04 - Comercio
        em Salvador, Bahia. 
        </p> 
        <p className={styles.paragrafo}>
        Temos uma equipe qualificada e eficiente,
        comprometida em superar as expectativas dos nossos clientes. Atuamos com
        seriedade, transparência e, sobretudo, respeito. Prezamos sempre pela
        qualidade do atendimento, estando prontos para atender e satisfazer as
        necessidades de sua embarcação no que se refere ao fornecimento de
        materiais para as seções de convés, escritório, passadiço e casa de
        máquinas.
        </p>     
      
    </PostModelo>
  );
}

export default SobreMim;
