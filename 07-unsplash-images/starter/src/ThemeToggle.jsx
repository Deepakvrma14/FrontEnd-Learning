import  {useGlobalContext}  from './context';
import { FaSun, FaMoon } from 'react-icons/fa';
const ThemeToggle = () =>{
    const {isDarkTheme, toggleDarkTheme} = useGlobalContext();
    return(
        
        <button onClick={toggleDarkTheme}>
            {isDarkTheme ? <FaSun /> : <FaMoon />}
        </button>
    );
}
export default ThemeToggle;