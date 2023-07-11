import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./Redux";
import {setTaskNumber} from './Redux'

const TaskForm = (props) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
 

    dispatch(addTask(text))
    dispatch(setTaskNumber(1))

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
