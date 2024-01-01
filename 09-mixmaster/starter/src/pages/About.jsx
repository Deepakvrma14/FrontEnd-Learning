import { Link } from 'react-router-dom';

const About = () => {
    console.log("about");
  return (
    <div>
    
      <Link to='/'>Back Home</Link>
      <h1>About page</h1>
    </div>
  );
};
export default About;