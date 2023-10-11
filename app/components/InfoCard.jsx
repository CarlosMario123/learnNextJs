
"use client"
import axios from "axios"
import { useRouter } from "next/navigation" //nos permite redireccionar atravez de sus hooks

export default function InfoCard({product}) {
    
    const router = useRouter(); //asignamos el hook a una variable llamada ruta
const deleteProduct = async ()=>{
     console.log(product[0][0])

     if(confirm("estas seguro que quieres eliminar el producto?")){
        const respuesta = await axios.post(`http://127.0.0.1:5000/eliminarProducto/${product[0][0]}`)
        
        if(respuesta.status == 204)
        console.log("eliminado")
        router.push("/products")
        router.refresh()//refresca los datos al llegar ala pagina
           
     }
}
  return (
    <div className="flex flex-col p-4 font-semibold text-black bg-white rounded-sm shadow-md shadow-white gap-y-3 w-96">
       <p>Nombre del producto: {product[0][1]}</p>
       <p>Precio del producto: {product[0][2]}</p>
       <p>Descripcion del producto: {product[0][3]}</p>
       <div className="flex flex-row justify-between w-full text-white">
         <button className="p-1 bg-red-500 rounded-sm" onClick={deleteProduct}>Eliminar</button>
         <button className="p-1 bg-gray-500 rounded-sm">Editar</button>
       </div>
    </div>
  )
}
