
import { useState } from "react"
export  function Modal({task,actu,Setmostrar}) {

    const [task2,setTask2] = useState({
        user:"",
        descripcion:"",
    })

    const manejarCambios = (e)=>{
      console.log(e.target.value)
      setTask2({
        ...task2,
        [e.target.name]:e.target.value
      })
    }

    const actualizar = () =>{
        task.user = task2.user;
        task.descripcion = task2.descripcion;
        actu(task)
        console.log("actualizar")
        Setmostrar(false)
    }
    
  return (
    <div className="z-50 flex flex-col items-center w-full h-full p-3 bg-white rounded-md">
        <h2 className="mb-2 font-bold text-center">Actualizar</h2>
        <label htmlFor="user">Editar Nombre</label>
        <input type="text" placeholder="Ingrese el nuevo nombre" className="mb-3 text-center border-b border-gray-500 w-72" name="user" onChange={manejarCambios}/>
        <label htmlFor="descripcion">Editar descripcion</label>
        <textarea type="text" placeholder="Ingrese el nueva descripcion" className="text-center border border-gray-500 w-72" name="descripcion" onChange={manejarCambios}/>
        <button className="w-64 p-1 mt-10 text-white bg-blue-600 rounded-sm" onClick={actualizar}>Realizar Cambios</button>
    </div>
  )
}
