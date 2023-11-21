import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';



const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];

// using spread operator

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      
    </article>
  );
};

function BookList() {
  return (
    <section className='booklist'>
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}



const EventExample = () =>{
  const handleFormInput =(e) =>{
    console.log(e);
    console.log(`Input Name: ${e.target.name}`);
    console.log(`Input value: ${e.target.value}`);
    console.log('ahndeled input')

    
  };
  const handleButtonClick = () =>{
    alert('ahhhh slowww');
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }
  return (<section>
    <form onSubmit={handleSubmitButton}>
      <h2>
        Sex Center
      </h2>
      <input
        type='text'
        name='input'
        onChange={handleFormInput}
        style={{ margin: '1rem 0' }}

      />
      <button type='submit'>Submit</button>
    </form>
    <button onClick={handleButtonClick} >Click me daddy</button>
  </section>);
};


// ----------------------------------
// doing it prop way
// function BookList() {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//         console.log(book);
//         const { img, title, author, id } = book;
//         return <Book book={book} />
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const {img, title, author, id} = props.book;
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
      
//       <h2> ({id}) {title}</h2>
//       <h4>{author} </h4>
//     </article>
//   );
// };

// ---------------------------------------
// spread operator
// const friends = ['john', 'peter', 'anna'];
// const newFriends = [...friends, 'susan'];
// console.log(friends);
// console.log(newFriends);
// const someObject = {
//   name: 'john',
//   job: 'developer',
// };
// const newObject = { ...someObject, location: 'florida' };
// console.log(someObject);
// console.log(newObject);
// ---------------------------------------
// function BookList() {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//         console.log(book);
//         const { img, title, author, id } = book;
//         return <Book img={img} title = {title} author = {author} id={id} />
//       })}
//     </section>
//   );
// }

// const Book = ({ img, title, author, id }) => {
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
      
//       <h2> ({id}) {title}</h2>
//       <h4>{author} </h4>
//     </article>
//   );
// };

// const firstBook = {
//   author: 'Jordan Moore',
//   title: 'Interesting Facts For Curious Minds',
//   img: './images/book-1.jpg',
// };
// const secondBook = {
//   author: 'James Clear',
//   title: 'Atomic Habits',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
// };
// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       >
//         {/* below is children prop */} 
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
//           repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
//         </p>
//         <button>click me</button>
//       </Book>
//       <Book 
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   );
// }


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