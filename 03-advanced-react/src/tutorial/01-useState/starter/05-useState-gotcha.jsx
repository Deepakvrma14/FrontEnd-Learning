import { useState } from "react";
const UseStateGotcha = () => {
  // return <h2>useState "gotcha"</h2>;
  const [value, setValue] = useState(0);
  const changeValue =() =>{
    setTimeout(()=>{
      console.log('clicked the button');
      setValue((currState) =>{
        const newState = currState + 1;
        return newState;
      });
    }, 3000);
    // setValue(value + 1);
    console.log(value);
  };
  return (
    <div>
      <h1>Updating using useState</h1>
      <h2>{value}</h2>
      <button type = 'button' onClick={changeValue}>Click Me</button>
    </div>
  );
};

export default UseStateGotcha;
