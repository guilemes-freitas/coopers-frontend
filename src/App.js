import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useTask } from "./providers/Task";

function App() {
  const {initializeTasks} = useTask()
  useEffect(()=>{
    initializeTasks();
    //eslint-disable-next-line
  },[]);

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
