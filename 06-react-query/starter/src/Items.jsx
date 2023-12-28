import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
const Items = ({ items }) => {
  const result = useQuery({
    queryKey: ['items'],
    queryFn : () => customFetch.get('/'),
    // queryFn: () => {
    //   return fetch('http://localhost:3000/items').then((res) => res.json());
    // },
  });
  console.log(result);
  return (
    <div className='items'>
      
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
