import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <div className='nav-center' >
            <span className='logo'>Mixmaster</span>
            <div className='nav-links'>
                <NavLink to='/' ClassName='nav-link'>Home</NavLink>
                <NavLink to='/about' ClassName='nav-link'>About</NavLink>
                <NavLink to='/newsletter' ClassName='nav-link'>Newsletter</NavLink>
            </div>
        </div>
    );
};
export default Navbar;