import { useState, useEffect } from "react";
const UserChallenge = () => {
  // return <h2>user challenge</h2>;
  const [user, setUser] = useState(null);
  const login = () =>{
    setUser({name: 'john doe'});
  }
  const logout = () =>{
    setUser(null);
  }

  return(
    <div>
      {user ? 
      (
      <div>
        <h4>hello there, {user.name}</h4>
        <button onClick= {logout} >Logout</button>
      </div>
      ):(
        <div>
          <h4>Please Login</h4>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
