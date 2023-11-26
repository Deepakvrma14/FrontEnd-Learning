import {data } from '../../../data'
import React, { useState } from 'react';
const UseStateArray = () => {
  // return <h2>useState array example</h2>;
  const [people, setPeople] = React.useState(data);
  const removePeople  = (id) =>{
    let newPeople = people.filter((person) => person.id!== id); 
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) =>{
      const{id,name} = person;
      return(
        <div>
          <h1>{name}</h1>
          <button onClick={() =>removePeople(id) }> remove</button>
        </div>
      )
    })}
    <button onClick={() => setPeople([])} > Remove All Items</button>
    </div>
  );
};

export default UseStateArray;
