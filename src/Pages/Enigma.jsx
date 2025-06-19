import { useState } from "react";
import "./Enigma.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Enigma() {
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");
  const [liberado, setLiberado] = useState(false);

  const verificarResposta = () => {
    const normalizada = resposta.trim().replace(",", ".");
    if (normalizada === "25.32") {
      setLiberado(true);
      setErro("");
    } else {
      setErro("Hmm... tente outra vez com carinho 💭");
      setLiberado(false);
    }
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="enigma-container">
        <h1 className="enigma-titulo"> O Enigma do Amor</h1>
        <p className="enigma-descricao">
          Resolva este enigma para desbloquear a surpresa especial! 🎁
        </p>

        <div className="enigma-puzzle">
          <p>
            Vamos ver se você conhece bem nossa história... <br />
            <br />
            1️) Quantas letras tem a palavra mais importante entre nós? (É
            fácil...)
            <br />
            2️) Multiplique esse número pela quantidade de{" "}
            <bold>anos exatos</bold> desde agosto de 2022 até hoje (meses
            convertidos em fração de ano).
            <br />
            3️) Some o total de meses entre agosto de 2022 até agora.
            <br />
            4️) Subtraia a quantidade de letras do seu nome completo (sem
            espaços).
            <br />
            5️) Adicione uma unidade de amor!
            <br />
            💡 Dica: Use ponto ou vírgula se precisar. Exemplo: 20.32 ou 20,32
          </p>
        </div>

        <input
          type="text"
          placeholder="Digite sua resposta"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          className="enigma-input"
        />
        <button onClick={verificarResposta} className="enigma-botao">
          Enviar
        </button>

        {erro && <p className="enigma-erro">{erro}</p>}

        {liberado && (
          <div className="enigma-secreto">
            <h2>🎉 Você desbloqueou a surpresa! 🎉</h2>
            <p>
              Aqui está a carta secreta que preparei só para você... <br />
              Que nosso amor continue crescendo e enchendo nossas vidas de
              alegria!
            </p>
            <div className="carta"> 
            <p>
              <bold>Minha vida, </bold>
            </p>
            <p>
              Desde que nos aproximamos, eu senti que algo especial começava a
              florescer entre nós. Dois anos juntos (para mais), construindo uma
              história que cresce a cada dia, recheada de intensidade, carinho e
              cumplicidade. É incrível como o tempo passa voando quando estamos
              lado a lado, e como cada momento se transforma em um presente que
              guardo com todo o meu coração.
            </p>
            <p>
              Eu me <bold>apaixonei por você </bold> — pelas suas atitudes, pelo
              cuidado e amor que você dedica a nós, pela lealdade que jamais
              vacila e pela delicadeza que transparece em cada gesto seu. Você é
              meu companheiro, meu amigo, minha paixão — uma mistura perfeita de
              zelo, amizade e fogo, que me aquece tanto nos momentos difíceis
              quanto nas alegrias mais intensas.
            </p>
            <p>
              Ainda guardo com carinho e realização a lembrança do seu
              aniversário, da sua alegria tão ingênua e verdadeira, do brilho no
              seu sorriso que iluminou tudo ao redor. Foi ali que entendi que
              tudo o que faço por você vale a pena, só para ver esse brilho
              intenso e genuíno que você acende em mim todos os dias — trazendo
              paz, segurança, felicidade e amor.
            </p>
            <p>
              Amo cada instante simples que compartilhamos — as conversas
              longas, os abraços que parecem não ter fim, os treinos juntos, as
              risadas espontâneas, cozinhar lado a lado e ouvir a nossa música
              favorita. São esses pequenos momentos que tornam nossa vida tão
              especial e única.
            </p>
            <p>
              Quero agradecer a você por todo o amor, pela parceria inabalável,
              pela paciência e pela entrega sincera que sempre me oferece.
              Prometo amar você para sempre, cuidar do nosso amor com toda a
              dedicação, respeitar suas escolhas, crescer ao seu lado e ser seu
              porto seguro em qualquer tempestade.
            </p>
            <p>
              Você é minha vida, meu amor, meu desejo. E a cada dia que passa,
              sinto esse fogo crescer ainda mais — uma chama que nunca vai se
              apagar.
            </p>
            <p>Com todo meu amor e paixão, <br/> seu amor.</p>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Enigma;
