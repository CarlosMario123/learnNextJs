"use client"
import { generateId } from "@/app/js/generarId";
import { CreateTask } from "../organismo/OrganismCreate";
import { OrganismTask } from "../organismo/organismoTask";
import { useTasks } from "@/hooks/useTasks";

export function View() {
  const { tareas, addTask, deleteTask, updateTask } = useTasks();


  const add = (task) => {
        task.id = generateId()
        addTask({ user: task.user, descripcion: task.descripcion, id: task.id })
  };
  
  const deletee = (id) =>{deleteTask(id) }
  const actualizar = (task)=>{updateTask({task})}
  
  return (
    <div className="flex items-center justify-center w-full h-full gap-x-4">
      <OrganismTask tasks={tareas} delele={deletee} actu={actualizar}/>
      <CreateTask add={add} />
    </div>
  );
}
