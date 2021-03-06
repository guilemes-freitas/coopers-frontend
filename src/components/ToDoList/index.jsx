import { Button } from "antd";
import Task from "../Task";
import { Container, Top, Title,SubTitle,Input, TasksContainer, Image, InputContainer} from "./styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useTask } from "../../providers/Task";
import ConfirmIcon from "../../assets/images/confirm.svg"

const ToDoList = () => {
  const {tasks, setTasks, addTask, removeCompleted } = useTask();
  const toDoTasks = tasks?.filter((filtered) => !filtered.completed);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(tasks);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setTasks(newItems);
  };

  const handleCreate = (event) =>{
    if(event.target.value.length > 0){

      const data = {"title":event.target.value}
      addTask(data)
      event.target.value = ""
    }
  }

  return (
    <Container>
        <Top></Top>
        <Title>To-do</Title>
        <SubTitle>Take a breath.</SubTitle>
        <SubTitle>Start doing.</SubTitle>
        <InputContainer>
          <Image src={ConfirmIcon}/>
          <Input type="text" placeholder="Add new here..." onBlur={(event) => handleCreate(event)}/>
        </InputContainer>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId={"ToDoTasks"}>
          {(provided) => (
              <TasksContainer {...provided.droppableProps} ref={provided.innerRef}>

                {toDoTasks?.map((task, index) =>{
                  return  <Task key={task.id} index={index} task={task}></Task>
                })}
                {provided.placeholder}
              </TasksContainer>
            )}
          </Droppable>
        </DragDropContext>
        <Button type="primary" onClick={removeCompleted}>erase all</Button>
    </Container>
  );
};

export default ToDoList;