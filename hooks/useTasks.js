import { useReducer } from "react";

export function useTasks() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return state.concat([action.payload]);
      case 'delete':
        return state.filter((task) => task.id !== action.payload);
      case 'update':
        return state.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        });
      default:
        return state;
    }
  };

  const [tareas, dispatch] = useReducer(reducer, []);

  const addTask = (task) => {
    dispatch({ type: 'add', payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'delete', payload: id });
  };

  const updateTask = (task) => {
    dispatch({ type: 'update', payload: task });
  };

  return { tareas, addTask, deleteTask, updateTask };
}
