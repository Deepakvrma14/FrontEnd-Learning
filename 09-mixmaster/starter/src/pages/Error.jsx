import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from '../assets/not-found.svg'
const Error = () => {
    const error = useRouteError();
    console.log(error);
        return (
            <Wrapper>
                <h3>Sorry, the page you tried cannot be found</h3>
                <Link to='/' className='btn'>Back Home</Link>
                <img src={img} alt='not found' />
            </Wrapper>
        );
    
};
export default Error;