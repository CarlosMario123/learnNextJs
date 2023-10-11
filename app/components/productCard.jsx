import Link from "next/link"//utilizamos link para redireccionar una carta a un ruta dinamica
export default function ProductCard({product}) {
  return (
    <Link href={`/products/${product[0]}`}>
    <div  className="flex flex-col items-center justify-center p-2 text-black bg-white rounded-md w-72">
       <div className="p-1 text-white bg-blue-600 rounded-md">{product[1]} </div>
       <div>{product[2]}</div>
       <div>{product[3]}</div>
      
    </div>
    </Link>
  )
}
