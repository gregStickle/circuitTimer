import { FormEvent, useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (newItem === "") return;

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Exercise</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <div className="form-column">
          <label htmlFor="time">Time:</label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="text"
            id="time"
            placeholder="seconds"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Exercise List</h1>
      <ul className="list">
        <li>
          <label>Exercise 1</label>
        </li>
      </ul>
    </>
  );
}
