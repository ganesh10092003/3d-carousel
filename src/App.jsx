import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { data } from '../public/data.js'

const App = () => {
  const [active, setActive] = useState(2)
  const numOfCards = data.length;
  const handleNext = () => {
    setActive((prev) => (prev + 1) % numOfCards);
  };
  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? numOfCards - 1 : prev - 1));
  };
  const displayCards = [
    (active - 2 + numOfCards) % numOfCards,
    (active - 1 + numOfCards) % numOfCards,
    active,
    (active + 1) % numOfCards,
    (active + 2) % numOfCards
  ];
  return (
    <div className="app w-screen h-screen flex justify-center items-center">
      <div className="carousel flex flex-col gap-10">
        <div className="card-container flex flex-row gap-5">
          {displayCards.map((currID, index) => {
            const currCard = data.find((card) => card.id === currID + 1);
            return (
              <div
                className={`card w-40 h-40 text-2xl flex-col justify-center items-center bg-black text-white`}
                key={index}
                style={{
                  transform: `translateX(${(index - 2) * 100}px)`, // Adjust card position
                }}
              >
                <h2>{currCard.title}</h2>
                <p>{currCard.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="buttons flex flex-row justify-center items-center">
          <button className="cursor-pointer" onClick={handlePrev}>
            <TiChevronLeftOutline className="w-10 h-10" />
          </button>
          <button className="cursor-pointer" onClick={handleNext}>
            <TiChevronRightOutline className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
