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
];

function LoveGame() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    if (option === questions[step].answer) {
      setScore(score + 1);
    }
    setStep(step + 1);
  };

  if (step === questions.length) {
    return <div className="game-result">Você acertou {score} de {questions.length}! 💖</div>;
  }

  return (
    <div className="love-game">
      <h3>{questions[step].question}</h3>
      <div className="options">
        {questions[step].options.map((opt, idx) => (
          <button key={idx} onClick={() => handleClick(opt)}>{opt}</button>
        ))}
      </div>
    </div>
  );
}

export default LoveGame;