import { useState } from 'react';

const UseStateObject = () => {
  // return <h2>useState object example</h2>;
  // const [name, setName]  = useState('john');
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState('coding');
  // const handleClick = () =>{
  //   setName('bob');
  //   setAge(25);
  //   setHobby('gaming');
  // };
  // return (
  //   <div>
  //     <h1>{name}</h1>
  //     <h1>{age}</h1>
  //     <h1>{hobby}</h1>
  //     <button onClick={handleClick}>Change</button>
  //   </div>
  // );
  const [person, setPerson] =useState({
    name:'john',
    age:24,
    hobby:'coding'
  });
  const displayPerson = () =>{
    setPerson({name:'bob', age:25, hobby:'gaming'});
  }
  return(
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.hobby}</h1>
      <button onClick={displayPerson}>Change</button>
    </div>
  );
};

export default UseStateObject;
