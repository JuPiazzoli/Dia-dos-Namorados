import { useState, useEffect } from 'react';
import './MemoryGame.css';
import MEM1 from '../assets/MEM1.jpg';
import MEM2 from '../assets/MEM2.jpg';
import MEM3 from '../assets/MEM3.jpg';
import MEM4 from '../assets/MEM4.jpg';
import MEM5 from '../assets/MEM5.jpg';
import MEM6 from '../assets/MEM6.jpg';

const images = [MEM1, MEM2, MEM3, MEM4, MEM5, MEM6];

function shuffleCards() {
  const doubled = [...images, ...images];
  return doubled
    .sort(() => Math.random() - 0.5)
    .map((img, i) => ({
      id: i,
      img,
      flipped: false,
      matched: false
    }));
}

function MemoryGame() {
  const [cards, setCards] = useState(shuffleCards());
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [lockBoard, setLockBoard] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (firstCard && secondCard) {
      setLockBoard(true);
      if (firstCard.img === secondCard.img) {
        setCards(prev =>
          prev.map(card =>
            card.img === firstCard.img ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
          resetTurn();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (cards.every(card => card.matched)) {
      setCompleted(true);
    }
  }, [cards]);

  const handleFlip = (card) => {
    if (lockBoard || card.flipped || card.matched) return;

    const flippedCard = { ...card, flipped: true };
    setCards(prev =>
      prev.map(c => (c.id === card.id ? flippedCard : c))
    );

    if (!firstCard) {
      setFirstCard(flippedCard);
    } else {
      setSecondCard(flippedCard);
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
  };

  return (
    <div className="memory-game">
      <h2>Jogo da Memória do Amor</h2>
      <div className="memory-grid">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? 'flipped' : ''}`}
            onClick={() => handleFlip(card)}
          >
            <div className="front">
              <img src={card.img} alt="Memória" />
            </div>
            <div className="back"></div>
          </div>
        ))}
      </div>
      {completed && <p className="mensagem-final">Você encontrou todos os pares! Nosso amor é mesmo inesquecível! 💘</p>}
    </div>
  );
}

export default MemoryGame;