import { useState,useEffect } from "react";

const CleanupFunction = () => {
  // return <h2>cleanup function</h2>;
  const [toggle, setToggle] = useState(false);
  return(
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <Cleanup/>}
    </div>
  );
};
const Cleanup = () => {
  useEffect(()=>{
  const intID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID);
  }, []);
  return <h2>Hello from cleanup Function</h2>
};

export default CleanupFunction;
