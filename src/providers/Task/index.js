import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const TaskContext = createContext([]);

export const TaskProvider = ({ children }) => {
  const initialState =
    JSON.parse(localStorage.getItem(`@Coopers:Tasks`)) || [];
  const [tasks, setTasks] = useState(initialState);

  const addTask = (task) => {
    const token = JSON.parse(localStorage.getItem(`@Coopers:token`));
    if(!!token){
      api
      .post('/tasks/',task,{headers: {"Authorization" : `Token ${token}`}})
      .then((response) => {
        const list = tasks;
        list.push(response.data);
        localStorage.setItem(`@Coopers:tasks`, JSON.stringify(list));
        setTasks(list);
        initializeTasks();
      });
    }else{
      task.id = tasks.length +1
      task.completed = false;
      setTasks([...tasks,task]);
    }
  };

  const removeTask = (task) => {
    const token = JSON.parse(localStorage.getItem(`@Coopers:token`));
    if(!!token){
      api
      .delete(`/tasks/${task.id}/`,{headers: {"Authorization" : `Token ${token}`}})
      .then((_) => {
        const list = tasks.filter((filtered) => filtered.id !== task.id);
        localStorage.setItem(`@Coopers:tasks`, JSON.stringify(list));
        setTasks(list);
      });
    }else{
      const list = tasks.filter((filtered) => filtered.id !== task.id);
      setTasks(list);
    }
  };

  const removeCompleted = () => {
    const token = JSON.parse(localStorage.getItem(`@Coopers:token`));
    if(!!token){
      api
      .delete('/tasks/completed/',{headers: {"Authorization" : `Token ${token}`}})
      .then((_) => {
        localStorage.removeItem(`@Coopers:tasks`);
        setTasks([]);
      });
    }else{
      const list = tasks.filter((filtered) => filtered.completed);
      setTasks(list);
    }
  };

  const removeIncompleted = () => {
    const token = JSON.parse(localStorage.getItem(`@Coopers:token`));
    if(!!token){
      api
      .delete('/tasks/incompleted/',{headers: {"Authorization" : `Token ${token}`}})
      .then((_) => {
        localStorage.removeItem(`@Coopers:tasks`);
        setTasks([]);
      });
    }else{
      const list = tasks.filter((filtered) => !filtered.completed);
      setTasks(list);
    }
  };

  const updateTask = (task) => {
    const data = {
    "title":task.title,
    "completed":task.completed}

    const token = JSON.parse(localStorage.getItem(`@Coopers:token`));
    if(!!token){
      api
      .put(`/tasks/${task.id}/`,data,{headers: {"Authorization" : `Token ${token}`}})
      .then((response) => {
        const list = tasks.filter((filtered) => filtered.id !== task.id);
        list.push(response.data);
        localStorage.setItem(`@Coopers:tasks`, JSON.stringify(list));
        setTasks(list);
      });
    }else{
      const list = tasks.filter((filtered) => filtered.id !== task.id);
      list.push(task);
      setTasks(list);
    }
  };

  const initializeTasks = () =>{
    const token = JSON.parse(localStorage.getItem("@Coopers:token")) || "";
    if(!!token){
      api
      .get('/tasks/',{headers: {"Authorization" : `Token ${token}`}})
      .then((response) => {
        setTasks(response.data);
        localStorage.setItem(`@Coopers:tasks`, JSON.stringify(response.data));
      });
    } else{
      setTasks(tasks)
    }
  }

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, initializeTasks, addTask, removeTask, removeCompleted, removeIncompleted, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);