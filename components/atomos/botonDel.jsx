import { useState } from "react"
export  function BotonDel({delele,unic}) {

    const [id,setId] = useState(unic);

    const deleted = ()=>{
        console.log("delete")
        console.log(id)
        delele(id)
    }
  return (
      <button className="p-1 mt-4 text-white bg-red-500 rounded-sm" onClick={deleted}>Eliminar</button>
  )
}
