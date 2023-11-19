import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
function BookList(){
  return (
    <section>
      <Book />
      <Book />
      <Book />
      
    </section>
  );
}
const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src='./images/book-1.jpg' alt='Interesting Facts For Curious Minds' />
);
// const Image = () => (
//   <img
//     src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
//     alt='Interesting Facts For Curious Minds'
//   />
// );
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};
const Author = () => <h4>Jordan Moore </h4>;


// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);