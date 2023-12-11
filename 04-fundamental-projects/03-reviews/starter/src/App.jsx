import reviews from "./data";
import { useState } from "react";
import { FaBeer } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text}  = reviews[index];
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () =>{
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return(
    <main>
      <h2>Reviews Starter</h2>
      <button onClick={nextPerson}>Prev</button>
      <button onClick={prevPerson}>Next</button>
      <button onClick={randomPerson}>Random</button>  
      <img src={image} alt={name} />
      <h3>
        {name}
      </h3>
      <h4>
        {job}
      </h4>
      <p>
        {text}
      </p>

    </main>
  );
};
export default App;
