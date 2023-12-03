import { useState } from "react";
const ControlledInputs = () => {
  // return <h2>Controlled Inputs</h2>;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default action of form submission which is to refresh the page
    console.log(name, email);
  };
  return(
    <form className="form">
    <h4>Controlled Inputs</h4>
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        name
      </label>
      <input type="text" className="form-input" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
    </div>
    <div className="form-row">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input type="email" className="form-input" id="email" name="email"  value={email} onChange={(e)=> setEmail(e.target.value)} /> 
      
    </div>
    <button type="submit" className="btn btn-block" onClick={handleSubmit}>Submit</button>
  </form>
  );
};
export default ControlledInputs;
