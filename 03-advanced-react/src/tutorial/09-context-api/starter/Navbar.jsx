import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
const Navbar = () => {
    const [name, setName] = useState('John Doe');
    const logout = () => {
        setName(null);
    }
    return (
        <div className="navbar">
            <h5>Navbar</h5>
            <NavLinks name={name} logout = {logout} />
        </div>
    );

};
export default Navbar;