"use client" //esto es un componte cliente
import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
export function ProductForm(){

  const ruta = useRouter();
    const [producto,setProducto] = useState({
        name:"",
        price: 0,
        description:""
    })

    const manejarCambios = (e)=>{
      console.log(e.target.value)
      setProducto({
        ...producto,
        [e.target.name]:e.target.value
      })
    }

    const manejarEnvio = async (e)=>{
      e.preventDefault();
      console.log(producto);
  
      try {
          const resp = await axios.post("http://127.0.0.1:5000/enviarProducto", producto);
          console.log(resp.data);
          // Puedes realizar acciones adicionales después de una solicitud exitosa aquí
          ruta.push("/products")
          ruta.refresh()//refresca la pagina al llegar para actualizar datos
      } catch (error) {
          console.error("Error:", error);
      }
    }
   return <form action="" className='flex flex-col p-8 mb-4 bg-white rounded-md shadow-md gap-y-3' onSubmit={manejarEnvio}>
    <label htmlFor="name" className='text-gray-700 '>Nombre del producto</label>
    <input type="text" name = "name" placeholder='Ingrese nombre del producto'  onChange={manejarCambios}  className='text-black bg-gray-300 rounded-md t-72 wp-1'/>

    <label htmlFor="price" className='text-gray-700'>Precio del producto</label>
    <input type="text" name='price' placeholder='0'  onChange={manejarCambios} className='p-1 text-black bg-gray-300 rounded-md w-72'/>

    <label htmlFor="description" className='text-gray-700'>Descripcion del producto</label>
    <input type="text" placeholder='description'  onChange={manejarCambios} className='p-1 text-black bg-gray-300 rounded-md w-72' name='description'/>
    <button className = "p-1 text-white bg-blue-600 rounded-md hover:bg-blue-800">Agregar Producto</button>
</form>

}