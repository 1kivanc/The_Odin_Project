import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import usePokemonData from './hooks/useFetchImages';
import './styles/App.css';

const App = () => {
  const pokemons = usePokemonData();
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [allFlipped, setAllFlipped] = useState(true);

  useEffect(() => {
    if (pokemons.length) {
      const doubledPokemons = [...pokemons, ...pokemons];
      setCards(shuffleArray(doubledPokemons.map((pokemon, index) => ({ ...pokemon, id: index }))));
      setTimeout(() => {
        setAllFlipped(false);
      }, 3000); 
    }
  }, [pokemons]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (clickedCard) => {
    if (flippedCards.length === 2 || matchedCards.includes(clickedCard.id)) {
      return;
    }

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      if (newFlippedCards[0].name === newFlippedCards[1].name) {
        setMatchedCards([...matchedCards, newFlippedCards[0].id, newFlippedCards[1].id]);
        setScore(score + 1);

        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="App">
      <Scoreboard score={score} />
      <div className="card-grid">
        {cards.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            handleClick={handleCardClick}
            isFlipped={
              allFlipped ||
              flippedCards.some(card => card.id === pokemon.id) ||
              matchedCards.includes(pokemon.id)
            }
          />
        ))}
      </div>
    </div>
  );
};
export default App;
