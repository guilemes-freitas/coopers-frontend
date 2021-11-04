import { Button } from "antd";
import Task from "../Task";
import { Container, Top, Title,SubTitle,Input, TasksContainer} from "./styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

const ToDoList = () => {
  const [tasks,setTasks] = useState([{'id':'1','title':'abluble','completed':false},{'id':'500','title':'abluble2','completed':false}])

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(tasks);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setTasks(newItems);
  };

  return (
    <Container>
        <Top></Top>
        <Title>To-do</Title>
        <SubTitle>Take a breath.</SubTitle>
        <SubTitle>Start doing.</SubTitle>
        <Input type="text" placeholder="Add new here..."/>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId={"ToDoTasks"}>
          {(provided) => (
              <TasksContainer {...provided.droppableProps} ref={provided.innerRef}>

                {tasks.map((task, index) =>{
                  return  <Task key={task.id} index={index} task={task}></Task>
                })}
                {provided.placeholder}
              </TasksContainer>
            )}
          </Droppable>
        </DragDropContext>
        <Button type="primary">erase all</Button>
    </Container>
  );
};

export default ToDoList;