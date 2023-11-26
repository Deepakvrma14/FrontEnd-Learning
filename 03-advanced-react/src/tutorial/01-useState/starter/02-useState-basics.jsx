import {useState} from 'react';

const UseStateBasics = () => {
  // return <h2>useState basics</h2>;

  
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count+1);
    console.log(count);
  }
  return(
    <div>
      <h1>updating using useState </h1>
      <h2>{count}</h2>
      <button type = 'button' onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UseStateBasics;
