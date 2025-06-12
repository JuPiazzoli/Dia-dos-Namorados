import { useState, useEffect } from "react";
import "./Contagem.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";

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
      const diferenca = agora - dataInicio; // diferença em milissegundos
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
        <h1 className="contagem-titulo">Nosso Amor em Cada Segundo 💖</h1>

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
          Desde o dia 24 de janeiro de 2024, começamos a escrever uma linda
          história de amor. Cada dia ao seu lado é um presente, cada minuto é
          repleto de carinho, e cada segundo só faz aumentar tudo o que sinto
          por você. Obrigado(a) por ser meu amor, meu lar e minha alegria. 💕
        </p>

        <div className="contagem-imagens">
          <img src="/cont1.jpg" alt="Amor 1" />
          <img src="/cont2.jpg" alt="Amor 2" />
          <img src="/cont3.jpg" alt="Amor 3" />
        </div>

        <div className="extra-mensagem">
          <p>
            💌 Que venham muitos e muitos mais dias ao seu lado... Te amo
            infinitamente!
          </p>
        </div>
      </div>
    </>
  );
}

export default Contagem;
