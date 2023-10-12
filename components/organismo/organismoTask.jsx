import { TituloMD } from "../atomos/TituloMd"
import ContainTask from "./ContainTask"
export function OrganismTask({tasks,delele,actu}){
    
 
   return (
       <div className="bg-purple-950 w-[40rem] h-96 opacity-90 shadow-gray-400 shadow-sm rounde-md py-3 px-4 flex flex-col">
           <TituloMD name = "Task"/>
            <ContainTask tasks={tasks} delele={delele} actu={actu}/>
       </div>
   )
}