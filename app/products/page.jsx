import axios from "axios"
import ProductCard from "../components/productCard";
const  llamarApi = async ()=>{
    const respuesta = await axios.get("http://127.0.0.1:5000/products");
     console.log(respuesta)
  
    return  respuesta.data;
}

export default async function Productspage() {
   const products = await llamarApi()
  return (

    <div className="w-full px-4">
        <h1 className="text-2xl font-bold text-white">Productos Listados</h1>
        <div className="flex flex-wrap justify-between w-full mt-10 gap-x-4 gap-y-3">
          
          {
            products.map((e,i)=>{
                return <ProductCard product={e} key={i}/> 
            })
          }
              
        
    </div> 
    </div>
   
  )
}
