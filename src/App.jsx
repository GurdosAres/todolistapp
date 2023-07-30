import { useEffect, useState } from "react"
import "./style.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App(){


  const[Todos,setTodos] = useState(() => {
    const localValue  = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  }) 

  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(Todos))
  },[Todos])

  function AddTask(title){
    title = title.charAt(0).toUpperCase() + title.slice(1);

    setTodos(currentItem => {
      return [...currentItem,{id:crypto.randomUUID(),title,completed:false}
      ]
      }
    )
  }




  function toggleCheck(id,completed){
    setTodos(currentItem => {
      return currentItem.map(
        item => {
          if(item.id === id){
            return {...item,completed}
          }
            return item
        }
      )
    })
  }
  function deleteTask(id){
    setTodos(currentItem => {
      return currentItem.filter(item => item.id !== id)
    })
  }
    return  <>
    
    <NewTodoForm AddTask={AddTask}/>
    
    <h1 className="h1-item">Todo List</h1>
      <TodoList Todos={Todos} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
    </>
}