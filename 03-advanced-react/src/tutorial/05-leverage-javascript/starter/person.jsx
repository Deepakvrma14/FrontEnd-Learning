import {useState, useEffect} from 'react' 
import avatar from '../../../assets/default-avatar.svg';

import {people} from '../../../data'
// const img = people?.images?.[0]?.small?.url || avatar;
const img = people?.images?.[0]?.small?.url || avatar;

const Person = () =>{
    return(
        <div>
            <h2>person component</h2>
            {(people.map((person)=>{
                return <div key={person.id}>
                    {person.name}
                    {person.nickName}
                    <img src={img} style={{ width: '50px', height:'50%' }} />
                </div>
            }))}
        </div>
    );
};
export default Person;