import {createContext,useState,useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext()
export function TaskContextProvider(props){

    const[tasks,setTasks] = useState([])

    function createTask(task){ //si le pasamos 2 paramatros igual se puede title,description
        setTasks([...tasks,{
          id:tasks.length,
          title:task.title,
          description:task.description
        }])
    }

    useEffect(()=>{
        setTasks(data)
    },[])
  
    function deleteTask(kkId){
        // console.log(tasks)
        // console.log(kkId)
        setTasks(tasks.filter(task => task.id !== kkId))
    }
    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>


    )
}

