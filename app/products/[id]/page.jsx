
import axios from "axios";
import InfoCard from "@/app/components/InfoCard";

async function cargarProducto(id){
    const respuesta = await axios.get(`http://127.0.0.1:5000/product/${id}`)
    return respuesta.data;

}

export default async function Productpage({params}) {
    let product = await cargarProducto(params.id)
    console.log(product)
  return (
    <div className="w-full h-screen p-4">
       <h1 className="text-2xl font-bold">Producto:</h1>
       <div className="flex items-center justify-center w-full h-full">
       <InfoCard product={product}/>
       </div>
      
    </div>
  )
}
