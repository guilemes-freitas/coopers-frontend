import { TaskProvider } from "./Task";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TaskProvider>{children}</TaskProvider>
    </UserProvider>
    );
};

export default Providers;