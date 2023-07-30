import { useState } from "react"

export function NewTodoForm(props){

    const[NewItem,setNewItem] = useState("") 

    function handleSubmit(e){
        e.preventDefault()
        
        if(NewItem === "") return
            
        props.AddTask(NewItem)

        setNewItem("")
    }  

    return  (
    
    <form action="" onSubmit={handleSubmit} className="new-item-form">
    <div  className="form-row">
      <label htmlFor="item" className="label-item">New Task</label><br />
      <input value={NewItem} onChange={e => setNewItem(e.target.value)} type="text" className="input-item" id="item" />
    </div>
    <button className="button-item">Add</button>


  </form>
    )
}