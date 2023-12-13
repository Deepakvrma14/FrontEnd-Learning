import {useState} from 'react';
import {nanoid} from 'nanoid';

import data from './data';
const App = () => {
  const [count, setCount] = useState(1);
  const [text,setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let newText = data.slice(0,count);
    setText(newText);
  };


  return (
    <section  >
      <form onSubmit={handleSubmit} >
        <label htmlFor="amount">paragraphs: </label>
        <input type='number' name='amount' value = {count} 
          min='1' step='1' max='8'
        onChange = {((e) => setCount(e.target.value))} />
        <button type="submit">generate</button>
      </form>
      <article >
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>

    </section>
  );
};
export default App;
