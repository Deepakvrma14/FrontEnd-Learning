const ErrorExample = () => {
  // return <h2>useState error example</h2>;
  let count  = 0;
  const handleClick =() =>{
    console.log('CLicked');
    count = count + 1;
    console.log(count);
  }

  return(
    <div>
      <h1>Increment the count here</h1>
      <h2>{count}</h2> 
      
      <button type = 'button' onClick={handleClick}>Click Me</button>
    </div>
  );

};

export default ErrorExample;
