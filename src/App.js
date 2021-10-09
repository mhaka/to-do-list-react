import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [list, setList] = useState(data);
  {
    /*mark as done */
  }
  const toggleMarkAsDone = (id) => {
    let updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });

    setList(updatedList);
  };

  return (
    <main>
      <section className="container">
        <h3>{list.length} things to-do today</h3>
        <p>mark as done with double click </p>
        <List list={list} onToggle={toggleMarkAsDone} />
        <button onClick={() => setList([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
