import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  // return <h2>Fetch Data </h2>;
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(()=>{
    const fetchUsers = async()=>{
      try{
        const response = await fetch(url);
        const user = await response.json();
        if(user){
          setUsers(user);
          setLoading(false);
        }
      }catch(error){
        setLoading(false);
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fetchUsers();
  },[]);
  if(loading){
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2>Error...</h2>
  }
  const {login, avatar_url, name, company, bio} = users;
  return(
    <div>
     
      <img style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}/>
        <h2>{name}</h2>
        <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
