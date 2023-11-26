import {useState, useEffect} from 'react'

const url = 'https://api.github.com/users';

const FetchData = () => {
  // return <h2>fetch data example</h2>;
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      }catch(error){
        console.log(error);
      }
    };
    fetchData();
  },[]);
  return(
    <section>
      <h3>github users</h3>
      <ul>
        {users.map((user)=>{
          const {id, login, avatar_url, html_url} = user;
          return(
            <li kye={id}>
              <img src = {avatar_url} alt={login}/>
              <div>
                <h2>{login}</h2>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
