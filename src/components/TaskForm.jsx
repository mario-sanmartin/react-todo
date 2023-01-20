import { useState,useContext } from "react"
import {TaskContext} from '../context/TaskContext'
function TaskForm(){

    const [title,setTitle]=useState("")//valor inicial
    const [description,setDescription]=useState("")
    const { createTask } = useContext(TaskContext)


    const handlerForm =((e)=>{
        e.preventDefault()
        // console.log(title)
        createTask({ //Si le pasamos 2 parametros igual se puede sin tener que ser un objeto
            title,
            description
        })
        setTitle('')
        setDescription('')
    })
    return(
        <div className="max-w-md mx-auto">
        <form onSubmit={handlerForm} className='bg-zinc-800 p-10 mb-4'>
        <h1 className='text-green-800 text-xl font-bold text-center p-3'>Agregar Tareas</h1>
            <input placeholder="Escribre tu tarea"
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            value={title}
            autoFocus
            className="bg-slate-300 p-3 w-full mb-2"
            />
            <textarea placeholder="Escribre tu Descripcion"
            onChange={(e)=>{
                setDescription(e.target.value)
            }}
            value={description}
            className='bg-slate-300 w-full p-2 mb-2'
            />
            <button className="bg-green-500 text-black w-full rounded-md">Agregar</button>
        </form>

        </div>
    )
}

export default TaskForm