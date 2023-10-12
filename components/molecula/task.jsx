import { Descripcion } from "../atomos/Descripcion";
import { LineCard } from "../atomos/LineCard";
import { Responsable } from "../atomos/Responsable";
import Botones from "../organismo/Botones";

export function Task({task,delele,actualizar}){

   return <div className="flex flex-row w-11/12 py-2 pr-2 duration-100 bg-white rounded-md shadow-sm blur-0 shadow-slate-400 hover:scale-105">
    <LineCard/>
    <div>
    <Responsable name = {task.user}/>
    <Descripcion text = {task.descripcion}/>
    <Botones delele={delele} task={task} actualizar = {actualizar}/>
    </div>
      
   
    </div>
}