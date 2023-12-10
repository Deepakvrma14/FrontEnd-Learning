
import React, { useState } from "react";
import data from "./data";
const App = () => {
  // return <h2>Birthday Reminder - Starter</h2>;
  const [people, setPeople] = useState(data);

  
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {/* <List people={people} /> */}
       </section>
    </main>
  );
};
export default App;
