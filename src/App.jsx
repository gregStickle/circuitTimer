import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newExercise, setNewExercise] = useState("");
  const [newTime, setNewTime] = useState("");
  const [exercises, setExercises] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setExercises((currentExercises) => {
      return [
        ...exercises,
        { id: crypto.randomUUID(), title: newExercise, time: newTime },
      ];
    });

    setNewExercise("");
    setNewTime("");
  }

  function deleteExercise(id) {
    setExercises((currentExercises) => {
      return currentExercises.filter((exercise) => exercise.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="exercise">New Exercise</label>
          <input
            value={newExercise}
            onChange={(e) => setNewExercise(e.target.value)}
            type="text"
            id="exercise"
            maxLength={40}
            required="true"
          />
        </div>
        <div className="form-row">
          <label htmlFor="time">Time</label>
          <input
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            type="text"
            id="time"
            placeholder="in seconds"
            maxLength={5}
            required="true"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Exercise List</h1>
      <ul className="list">
        {exercises.map((exercise) => {
          return (
            <li key={exercise.id}>
              <label>
                {exercise.title} | {exercise.time} sec
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteExercise(exercise.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <div className="form-row">
        <button className="btn start">Start Workout</button>
      </div>
    </>
  );
}
