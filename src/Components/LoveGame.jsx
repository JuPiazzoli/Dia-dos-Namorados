import { useState } from 'react';
import './LoveGame.css';

const questions = [
  {
    question: "Onde foi o nosso primeiro encontro?",
    options: ["No parque", "No cinema", "Em um café", "Na praça"],
    answer: "Na praça",
  },
  {
    question: "Qual música é a nossa cara?",
    options: ["A aliança", "Duas Metades", "Fiz esse som pra você", "Até a próxima vida"],
    answer: "Fiz esse som pra você",
  },
  {
    question: "Qual é o nosso dia especial?",
    options: ["24 de janeiro", "12 de junho", "25 de dezembro", "01 de janeiro"],
    answer: "24 de janeiro",
  },
  {
    question: "O que torna qualquer lugar perfeito?",
    options: ["Comida boa", "Música", "Você comigo", "Céu estrelado"],
    answer: "Você comigo",
  },
  {
    question: "O que eu mais gosto em você?",
    options: ["Seu sorriso", "Sua lealdade", "Seu cabelo", "Sua inteligência"],
    answer: "Sua lealdade",
  },
  {
    question: "Qual é nosso programa favorito de casal?",
    options: ["Ir ao cinema", "Viajar", "Ficar juntos seja qual for o lugar", "Comer pizza"],
    answer: "Ficar juntos seja qual for o lugar",
  },
  {
    question: "O que eu sempre quero quando a gente sai pra comer?",
    options: ["Pizza", "Sushi", "Pastel", "X-bacon"],
    answer: "Sushi",
  },
  {
    question: "O que nunca pode faltar nos nossos encontros?",
    options: ["Pipoca", "Brigadeiro", "Fotos", "Risadas e carinho"],
    answer: "Risadas e carinho",
  },
  {
    question: "Quem se apaixonou mais fácil?",
    options: ["Eu", "Você", "Empate", "Nenhum dos dois"],
    answer: "Eu",
  },
  {
    question: "Quem é mais ciumento?",
    options: ["Eu", "Você", "Empate", "Ninguém"],
    answer: "Você",
  },
  {
    question: "Quem sempre diz: 'só mais 5 minutinhos'?",
    options: ["Eu", "Você", "Nenhum", "Ambos"],
    answer: "Eu",
  },
  {
    question: "Se fosse escolher uma viagem dos sonhos, iríamos para…?",
    options: ["Patagônia", "Paris", "Gramado", "Canadá"],
    answer: "Patagônia",
  },
  {
    question: "Se eu pudesse te descrever em uma palavra, seria…",
    options: ["Perfeito", "Amor", "Incrível", "Tudo"],
    answer: "Incrível",
  },
];

function LoveGame() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(true);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[step].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (step + 1 < questions.length) {
        setStep(step + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  const restartGame = () => {
    setStep(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="love-game">
      {showResult ? (
        <div className="game-result">
          <h2>Jogo Concluído!</h2>
          <p>Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong> perguntas! </p>
          <p className='result'>
            {score === questions.length
              ? "Perfeição! Você me conhece demais."
              : score >= questions.length / 2
              ? "Muito bem! Você me conhece bastante."
              : "Humm... acho que precisamos de mais encontros, hein? "}
          </p>

          <br/>
          <br/>

          <button onClick={restartGame}>Jogar Novamente</button>
        </div>
      ) : (
        <div className="question-card">
          <h3>{questions[step].question}</h3>
          <div className="options">
            {questions[step].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className={
                  selected
                    ? opt === questions[step].answer
                      ? "correct"
                      : opt === selected
                      ? "incorrect"
                      : ""
                    : ""
                }
                disabled={selected}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoveGame;