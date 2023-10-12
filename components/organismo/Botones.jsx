import { BotonDel } from "../atomos/botonDel"
import { BotonUp } from "../atomos/BotonUp"
export default function Botones({delele,task,actualizar}) {
  return (
    <div className="flex flex-row gap-x-4">
       <BotonDel delele={delele} unic={task.id}/>
       <BotonUp actualizar={actualizar} ide={task.id}/>
    </div>
  )
}
