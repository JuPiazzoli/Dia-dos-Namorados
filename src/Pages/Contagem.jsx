import { useState, useEffect } from "react";
import "./Contagem.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import I1 from "../assets/1.jpg"
import I2 from "../assets/2.jpg"
import I3 from "../assets/3.jpg"

function Contagem() {
  const dataInicio = new Date("2024-01-24T00:00:00");
  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const diferenca = agora - dataInicio;
      const segundosTotais = Math.floor(diferenca / 1000);

      const dias = Math.floor(segundosTotais / (3600 * 24));
      const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
      const minutos = Math.floor((segundosTotais % 3600) / 60);
      const segundos = segundosTotais % 60;

      setTempo({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <div className="contagem-container">
        <h1 className="contagem-titulo">
          Nossa Trajetória contabilizada! ⏳
        </h1>

        <div className="contador">
          <div>
            <span>{tempo.dias}</span>
            <p>Dias</p>
          </div>
          <div>
            <span>{tempo.horas}</span>
            <p>Horas</p>
          </div>
          <div>
            <span>{tempo.minutos}</span>
            <p>Minutos</p>
          </div>
          <div>
            <span>{tempo.segundos}</span>
            <p>Segundos</p>
          </div>
        </div>

        <p className="texto-fofo">
          Desde o dia <strong>24 de Janeiro de 2024</strong>, começamos a viver
          uma história que é só nossa. Cada olhar, cada abraço e cada riso se
          transformaram em lembranças eternas. E o tempo… ah, o tempo só fez
          fortalecer aquilo que sentimos. Que possamos somar dias, colecionar
          momentos e multiplicar o amor que cresce a cada segundo.
        </p>

        <div className="contagem-imagens">
          <img src={I1} alt="Amor 1" />
          <img src={I2} alt="Amor 2" />
          <img src={I3} alt="Amor 3" />
        </div>

        <div className="extra-mensagem">
          <p>
            Que essa contagem nunca pare... Que nossa história continue sendo
            escrita com amor, cumplicidade e infinitos sorrisos. <br/> Te amo mais do
            que qualquer número pode contar!
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contagem;
