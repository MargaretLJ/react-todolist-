/* eslint-disable react/prop-types */
export const Todo = ({ task ,toggleComplete,deleteTodo}) => {
  return (
    <div style={{ display: "flex", alignItems: "Center" }}>
      <p onClick={()=>toggleComplete(task.id)} style={{ margin: "10px" }}> {task.completed? 'completed ' +task.task:task.task}</p>
      <div>
        <button>Edit</button>
        <button onClick={()=>deleteTodo(task.id)}>Delete</button>
      </div>
    </div>
  );
};
