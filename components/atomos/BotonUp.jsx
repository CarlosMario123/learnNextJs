import { useState } from "react"


export  function BotonUp({actualizar,ide}) {
    const [id,setId] = useState(ide);
   
    const eventUpdate = () =>{
         actualizar(id);
    }
    
  return (
    <button className="p-1 mt-4 text-white bg-gray-400 rounded-sm" onClick={eventUpdate}>Update</button>
  )
}
