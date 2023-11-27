import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  // return <h2>Multiple Returns Basics</h2>;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);
  if(isLoading){
    return <h3>Loading</h3>
  }
  return <h2>dataFetched</h2>

};
export default MultipleReturnsBasics;
