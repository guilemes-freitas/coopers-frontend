import { TaskProvider } from "./Task";

const Providers = ({ children }) => {
  return (
      <TaskProvider>{children}</TaskProvider>
  );
};

export default Providers;