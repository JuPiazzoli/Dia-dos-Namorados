import ImageSlider from "../Components/Slider";
import LoveGame from "../Components/LoveGame";
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import "./Sobre-nos.css";

function SobreNos() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div className="sobre-nos">
      <h2 className="titulo-sobre">
        Nossa história: de olhares a eternidade 💞 (TESTE)
      </h2>

      <ImageSlider />

      <div className="texto-sobre">
        <p>
          Tudo começou com um simples olhar, seguido de uma conversa tímida e
          muitos sorrisos. Aos poucos, os dias ficaram mais leves, os momentos
          mais doces e o coração mais cheio de amor. Passamos por fases,
          aventuras, desafios e conquistas, sempre juntos. Essa página é uma
          homenagem ao nosso amor, à nossa história e a tudo que ainda vamos
          viver. (TESTE)
        </p>
      </div>

      <LoveGame />
    </div>
    </>
  );
}

export default SobreNos;
