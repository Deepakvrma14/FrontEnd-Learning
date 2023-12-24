import React from 'react';
import {useQuery, useMutation } from 'react-query';

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function App () {
  const postQuery = useQuery({
    queryKey: ['posts'], 
    queryFn: () => wait(500).then(() => [...POSTS]),
    // queryFn: () => Promise.reject('Error!'),
  })
  if(postQuery.isLoading) return <h1>Loading...</h1>
  if(postQuery.isError) return <pre> {JSON.stringify(postQuery.error)} </pre>
  return (
    <div>
      {postQuery.data.map(post => {
         return <div key = {post.id}> {post.title} </div>
      })}
    </div>
  );
};
export default App;