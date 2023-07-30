export function TaskItem({id,title,completed,deleteTask,toggleCheck}){

    return(
        
        <div className="task-item">
        <input className="input-item-todo" type="checkbox" onChange={e => toggleCheck(id,e.target.checked)}   checked={completed}/>
     <label htmlFor="" className="label-tag">{title}</label>
     <button  onClick={() => deleteTask(id)}>Delete</button>
     </div>
    )

}