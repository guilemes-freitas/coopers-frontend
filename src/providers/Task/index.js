import { createContext, useState } from "react";

export const TaskContext = createContext([]);

export const TaskProvider = ({ children }) => {
  const initialState =
    JSON.parse(localStorage.getItem(`@Coopers:Tasks`)) || [];
  const [tasks, setTasks] = useState(initialState);

  const addTask = (task) => {
    const list = JSON.parse(localStorage.getItem(`@Coopers:Tasks`)) || [];
    task && list.push(task);
    localStorage.setItem(`@Coopers:Tasks`, JSON.stringify(list));
    setTasks(list);
  };

  const removeTask = (task) => {
    const list = tasks.filter((filtered) => filtered.name !== task.title);
    localStorage.setItem(`@Coopers:Tasks`, JSON.stringify(list));
    setTasks(list);
  };

  const removeAll = (task) => {
    localStorage.setItem(`@Coopers:Tasks`, JSON.stringify([]));
    setTasks([]);
  };

  const updateTask = () => {
    const list = JSON.parse(localStorage.getItem(`@Coopers:Tasks`));
    setTasks(list);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, removeAll, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};