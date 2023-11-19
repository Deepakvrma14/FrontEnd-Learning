import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg',
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};
function BookList(){
  return(
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}
const Book = (props) =>{
  console.log(props);
  // destructing props
  const {author, img, title} = props;
  return (
    <article className='book'>
      <img src = {img} alt = {title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}
// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className='book'>
//       <img src = {props.img} alt = {props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author} </h4>
//     </article>
//   )
// }
// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book />
//       <Book job ='developer'/>
//       <Book title ='New Book' number = {69}/>
//     </section>
//   );
// }
// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//       <p>{props.job}</p>
//       <p> {props.title} </p>
//       <p> {props.number} </p>
//       {console.log(props)}
//     </article>
//   );
// };
// const author = 'Jordan Moore';
// const title = 'Interesting Facts For Curious Minds';
// const img = './images/book-1.jpg';

// function BookList(){
//   return (
//     <section>
//       <Book />
//       <Book />
//       <Book />
      
//     </section>
//   );
// }
// const author = 'Jordan Moore';
// const Book = () => {
//   const title = 'Interesting Facts For Curious Mindssssss';
//   return (
//     <article className='book'>
//       <img
//         src='./images/book-1.jpg'
//         alt='Interesting Facts For Curious Minds'
//       />
//       <h2>{title}</h2>

//       <h4>{author.toUpperCase()} </h4>
//       {/* <p>{let x = 6}</p> */}
//       <p>{6 + 6}</p>
//     </article>
//   );
// };

// const Image = () => (
//   <img src='./images/book-1.jpg' alt='Interesting Facts For Curious Minds' />
// );
// // const Image = () => (
// //   <img
// //     src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
// //     alt='Interesting Facts For Curious Minds'
// //   />
// // );
// const Title = () => {
//   return <h2>Interesting Facts For Curious Minds</h2>;
// };
// // const Author = () => (
// //   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
// //     Jordan Moore
// //   </h4>
// // );
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   };
//   return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
// };

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);