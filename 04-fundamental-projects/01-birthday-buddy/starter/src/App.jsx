
import React, { useState } from "react";
import data from "./data";
import List from './List'
const App = () => {
  // return <h2>Birthday Reminder - Starter</h2>;
  const [people, setPeople] = useState(data);

  
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people = {people} />
        <button onClick={(()=> setPeople([]))}>
          clear All
        </button>
        {/* <List people={people} /> */}
       </section>
    </main>
  );
};
export default App;
