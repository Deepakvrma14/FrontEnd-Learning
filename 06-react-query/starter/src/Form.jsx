import { useState } from 'react';

import customFetch  from './utils';
import { useMutation } from '@tanstack/react-query';
// import { customFetch } from './utils';
const Form = () => {
  const {mutate: createItem, isLoading} = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/task', {taskTitle}),
    onSuccess: () => {
      setNewItemName('');
    },

    onError: (error) => {
      console.log(error);
    },
  })
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn'>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
