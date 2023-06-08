//import de useState
import { useEffect, useState } from "react";

const Count = () => {
  //déclarer useState et mis à 0
  const [counter, setCounter] = useState(1);
  const [activeButton, setActiveButton] = useState(false);

  //déclarer les fonctions countDown et countUp
  const countDown = () => {
    const newCount = counter - 1;
    // Si la nouvelle valeur du compteur est < 1, on sort de la fonction
    if (newCount < 1) return;
    setCounter(newCount);
  };
  const countUp = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  };

  const reset = () => {
    const newCount = 0;
    setCounter(newCount);
  };

  useEffect(() => {
    if (counter > 1) {
      setActiveButton(true);
    } else if (counter === 1) {
      setActiveButton(false);
    }
  }, [counter]);

  return (
    <div id="count">
      <div>
        <button onClick={countDown} disabled={!activeButton}>
          -
        </button>
        {counter}
        <button onClick={countUp}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Count;
