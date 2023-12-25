import React from 'react';
import {useQuery, useMutation, useQueryClient } from 'react-query';
import {nanoid} from 'nanoid';

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function App () {
  const quaryClient = useQueryClient();
  console.log(POSTS);  
  const postQuery = useQuery({
    // /posts -> ['posts']
    // /posts/1 -> ['posts', 1]
    // /posts?author=1 -> ['posts', {author: 1}]
    queryKey: ['posts'], 
    queryFn: obj => wait(500).then(() => {
      console.log(obj);
      return [...POSTS]
    }),
    // queryFn: () => Promise.reject('Error!'),
  })
  const newPostMutation = useMutation({
    mutationFn: title => wait(500).then(()=>{
      POSTS.push({id: nanoid() , title})
    }),
    onSuccess:()=>{
      quaryClient.invalidateQueries('posts');
    }
  })

  if(postQuery.isLoading) return <h1>Loading...</h1>
  if(postQuery.isError) return <pre> {JSON.stringify(postQuery.error)} </pre>
  
  return (
    <div>
      {postQuery.data.map(post => {
         return <div key = {post.id}> {post.title} </div>
      })}
      
    <button disabled={newPostMutation.isLoading} onClick = {()=> newPostMutation.mutate("newPost")} > add new  </button>
    </div>
  );
};
export default App;