import {useState, useEffect} from 'react'
import {people} from '../../../data'

const List =()=>{
    return(
       <div>
         {people.map((person)=>{
            return <div>{person.name}</div>
        })}
       </div>
    );
};
export default List;