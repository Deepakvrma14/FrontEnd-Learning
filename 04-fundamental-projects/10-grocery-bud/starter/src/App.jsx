import {useState} from 'react';
import Form from './Form';
import {nanoid} from 'nanoid';
import {toast} from 'react-toastify';
import Items from './Items';
const App = () => {
  const [items, setItems] = useState([]);

  const addItems = (item) => {
   const newItem = {
      name: item,
      completed:false,
      id : nanoid(),
   }
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  const removeItem = (id) =>{
    const newItems = items.filter((item)=> item.id !== id);
    setItems(newItems);
  };
  const editItem = (id) =>{
    const newItems = items.map((item)=>{
      if(item.id === id){
        const newItem = {...item, completed: !item.completed};
        return newItem;
      }
      return item;

    })
  };


  return (
    <>
    <h1>To Do Grocery List</h1>
    <Form addItem={addItems}/>
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </>
  );
};

export default App;
