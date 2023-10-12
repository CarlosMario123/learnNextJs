"use cliente"
import { useState } from "react"
import { generateId } from "@/app/js/generarId"
export default function Form({add}) {
  
        const [task,setTask] = useState({
        user:"",
        descripcion:"",
        id:""
    })

    const manejarCambios = (e)=>{
      setTask({
        ...task,
        [e.target.name]:e.target.value
      })
    }

    const manejarEnvio = ()=>{
      add(task);

    }
   return <div className='flex flex-col w-full p-8 mb-4 gap-y-3'>
    <label htmlFor="user" className='text-gray-700'>Nombre de la persona</label>
    <input type="text" name = "user" placeholder="Ingrese el nombre de la persona"  onChange={manejarCambios}  className='w-full p-1 text-sm text-black bg-gray-300 rounded-md'/>


    <label htmlFor="descripcion" className='text-gray-700'>Descripcion</label>
    <textarea type="text" placeholder='ingrese descripcion'  onChange={manejarCambios} className='w-full p-1 text-sm text-black bg-gray-300 rounded-md' name='descripcion'/>
    <button className = "p-1 text-white bg-blue-600 rounded-md hover:bg-blue-800" onClick={manejarEnvio}>añadir tarea</button>
</div>
  
}
