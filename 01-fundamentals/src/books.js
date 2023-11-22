import img1 from './images/book-1.jpg';
import img2 from './images/book-2.jpg';
import img3 from './images/book-3.jpg';

export const books = [
    {
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: img1,
      id: 1,
    },
    {
      author: 'James Clear',
      title: 'Atomic Habits',
      img: img2,
      id: 2,
    },
    {
        author: 'Stephen King',
        title: 'Fairy Tale',
        img: img3,
        id: 3,
      },
  ];

  
  const Book = (props) => {
    const { img, title, author, number } = props;
  
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        {/* <h3>{index}</h3> */}
        <h4>{author} </h4>
        <span className='number'>{`# ${number + 1}`}</span>
      </article>
    );
  };
  export default Book;

