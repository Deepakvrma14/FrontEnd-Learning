import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Title from './Titile';
import items from './data';

const temp = new Set();
items.forEach((item) => {
  temp.add(item.category);
});
const allCategories = ['all', ...temp];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  console.log(allCategories);

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
