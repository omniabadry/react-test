import { useState , useEffect } from "react";
export default function ToDo() {
    const [email,setEmail]=useState()
    const [task, setTask] = useState();
    const [tasks, setTasks] = useState([]);

   const handleInput=(event)=>{
       let value =event.target.value
        setTask(value);
    }
    const addTask = ()=>{
        let items = tasks.slice();
        items.push(task);
        setTasks(items);
        setTask("");
    }
    const deleteTask = (index)=>{
        let items = tasks.slice();
        items.splice(index,1);
        setTasks(items)
    }

   
    const getListItems=()=>{    
    let items = []
    if(tasks){
        for (let index = 0; index < tasks.length; index++) {
            items.push(<span><li><del>{tasks[index]}</del></li><button className="deletebtn" onClick={()=>deleteTask(index)}>delete</button><br /></span>)
        }
    }
    return items
   }


    return (
        <div class="container">
            <h1>Welcome {localStorage.getItem("email")}</h1>
            <br/>
            <br/>
            <ul className="ul">
                {getListItems()}
            </ul>
            <input
                placeholder="enter task"
                onChange={handleInput}
                className="form-control mb-4"
                value={task}
            />
            <button class="btn btn-primary" onClick={addTask}>add task</button>
        </div>
    )
}