import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import  customFetch  from './utils';
const Items = ({ items }) => {
  const {isLoading,error, data} = useQuery({
    queryKey: ['items'],
    queryFn: async () =>{
      const {data} = await customFetch.get('/something');
      return data;
    },
  });
  if(isLoading)  return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
  if(error) return <p style={{ marginTop: '1rem ' }}>Error...</p>;
  if(!data) return null;
  console.log(data);

  return (
    <div className='items'>
      {data.taskList.map((item) =>{
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
  // const result = useQuery({
  //   queryKey: ['items'],
  //   queryFn : () => customFetch.get('/'),
  //   // queryFn: () => {
  //   //   return fetch('http://localhost:3000/items').then((res) => res.json());b
  //   // },
  // });
  // console.log(result);
  // return (
  //   <div className='items'>
      
  //     {items.map((item) => {
  //       return <SingleItem key={item.id} item={item} />;
  //     })}
  //   </div>
  // );
};
export default Items;
