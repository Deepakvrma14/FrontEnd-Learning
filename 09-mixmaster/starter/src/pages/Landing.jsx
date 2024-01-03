import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const loader = async () => {
    return 'something'
};
const Landing = () => {
    const data = useLoaderData();
    console.log(data);
    return <h1>Landing</h1>;
  };
  export default Landing;

// const Landing = () => {
    
//     const fetchSome = async () =>{
//         try{
//             const response = await fetch('');
//             console.log(response.data);
//         }
//         catch(error){
//             console.log(error);
//         }};
//     useEffect(()=>{
//         fetchSome();
//     },[] );


// };
// export default Landing;