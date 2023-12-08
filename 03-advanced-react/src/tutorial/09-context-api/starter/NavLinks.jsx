import UserContainer from './UserContainer';
const NavLinks = ({name, logout}) =>{
    return(
        <div className="nav-container">
            <br/>
            <ul className='nav-links'>
            <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
            </ul>
            <h4>{name}</h4>
            <hr/>
            <UserContainer name={name} logout={logout}/>

        </div>
    );
};
export default NavLinks;