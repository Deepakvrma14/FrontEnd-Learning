import { useState } from 'react';
import { data } from '../../../data';
const UserChallenge1 = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);
  const handleSubmit =(e) =>{
    e.preventDefault();
    
    if(!name) return;
    const fakeID = Date.now();
    const newUser = {id:fakeID, name};
    setUsers([...users, newUser]);
    setName('');

  }
  const removeUsers =(id) =>{
    const newUser = users.filter((user)=> user.id !== id);
    setUsers(newUser);
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value = {name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block' >
          submit
        </button>
      </form>
      {/* render users below */}
      
        {users.map((person) =>{
          const {id, name} = person;
          return(
            <div key={id}>
             <h4> {name} </h4>
            <button className='btn' onClick={()=> removeUsers(id)}> Remove </button> 

            </div>
          );
        })}
      </div>
    
  );
};
export default UserChallenge1;
