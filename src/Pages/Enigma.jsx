import { useState } from 'react';
import './Enigma.css';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';

function Enigma() {
  const [resposta, setResposta] = useState('');
  const [erro, setErro] = useState('');
  const [liberado, setLiberado] = useState(false);

  const verificarResposta = () => {
    const normalizada = resposta.trim().replace(',', '.');
    if (normalizada === '25.32') {
      setLiberado(true);
      setErro('');
    } else {
      setErro('Hmm... tente outra vez com carinho 💭');
      setLiberado(false);
    }
  };

  return (
    <>
    <Header/>
    <NavBar/>
    <div className="enigma-container">
      <h1 className="enigma-titulo">💌 O Enigma do Amor</h1>
      <p className="enigma-descricao">
        Resolva este enigma para desbloquear uma surpresa especial! 🎁
      </p>

      <div className="enigma-puzzle">
        <p>
          Vamos ver se você conhece bem nossa história... <br /><br />
          1️⃣ Quantas letras tem a palavra mais importante entre nós? (É fácil 💖)<br />
          2️⃣ Multiplique esse número pela quantidade de **anos exatos** desde agosto de 2022 até hoje (meses convertidos em fração de ano).<br />
          3️⃣ Some o total de meses entre agosto de 2022 até agora.<br />
          4️⃣ Subtraia a quantidade de letras do seu nome completo (sem espaços).<br /><br />
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
      <button onClick={verificarResposta} className="enigma-botao">Enviar</button>

      {erro && <p className="enigma-erro">{erro}</p>}

      {liberado && (
        <div className="enigma-secreto">
          <h2>🎉 Parabéns! Você desbloqueou a surpresa 🎉</h2>
          <p>
            Aqui está a carta secreta que preparamos só para você... 💖<br />
            Que nosso amor continue crescendo e enchendo nossas vidas de alegria!
          </p>
          {/* Você pode incluir mais conteúdo secreto aqui: imagens, textos, joguinhos, etc */}
        </div>
      )}
    </div>
    </>
  );
}

export default Enigma;