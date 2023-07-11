import { useSelector } from "react-redux";


const TasksHeader = (props) => {
  const nb = useSelector(state => state.taskNumber)

  const tasks = useSelector(state => state.todo)
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1>React Todo List</h1>
      <h2>Task Number: {nb}</h2>
      <p>
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
