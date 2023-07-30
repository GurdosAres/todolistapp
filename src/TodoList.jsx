import { TaskItem } from "./TaskItem"
export function TodoList({Todos,deleteTask,toggleCheck}){


    return (<>
      <div className="container-items" >
          <p className="text-center">{Todos.length === 0 && "No Todos"}</p>
      {Todos.map(item =>{
        return (
          <TaskItem {...item} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
        )
      })}
        </div>
    </>
        
     )
}