"use client" 
import TituloCreate from "../atomos/TituloCreate";
import Form from "./form";

export function CreateTask({add}){
   
    return <div className="px-1 py-2 bg-white rounded-sm w-72 h-96">
      <TituloCreate name = "Crear Tarea"/>
      <Form add={add}/>
    </div>
}