import React from 'react';
import { useReducer } from 'react';
import { data } from '../../../data';

const CLEAR = 'clear_list';
const RESET = 'reset_list';
const REMOVE = 'remove_list';

const defaultState = {
  people:data
}

const reducer = (state, action) => {
  console.log(action);
  switch(action.type){
    case CLEAR:
      return {...state, people:[]};
  }
}
const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data);
  const [state, dispatch] = useReducer(reducer)

  const removeItem = (id) => {
    dispatch
  };
  const resetList = ()=>{
    setPeople(data);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
            
          </div>
        );
      })}
      {people.length<1 ? (
        <button className='btn' onClick={resetList}>Reset List</button>
      ):(
        <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
      )}

      
    </div>
  );
};

export default ReducerBasics;
