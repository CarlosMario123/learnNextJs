import { useState } from "react";
import { Task } from "../molecula/task";
import { Modal } from "./Modal";

export default function ContainTask({tasks,delele,actu}) {
  
  const [mostar,setMostrar] = useState(false);
  const [moment,setMoment] = useState({});
  
    const actualizar = (id) =>{
        setMostrar(true);
        let task = tasks.filter((t) => t.id == id)
         task = task[0];
          setMoment(task);
  
    }

    if(mostar){
      return <>
      <Modal task={moment} actu={actu} Setmostrar={setMostrar}/>
      </>
    }else{
      return (
        <div className="flex flex-col items-center w-full h-full overflow-y-auto gap-y-3">
             {
                tasks.map((e)=>{
                
                    return <Task task={e} key={e.id} delele={delele} actualizar={actualizar}/>
                })
             }
        </div>
      )
    }
  
}
