import { useDispatch } from "react-redux";
import { deleteTask, toggleTask ,setTaskNumber} from "./Redux";

const TaskItem = (props) => {
  
  const task = props.task
  const dispatch = useDispatch()

  return (
    <div>
      
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}

        <span 
          onClick={() => {dispatch(deleteTask(task.id));dispatch(setTaskNumber(-1))}}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      
    </div>
  );
};

export default TaskItem;
