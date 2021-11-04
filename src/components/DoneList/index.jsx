import { Button } from "antd";
import Task from "../Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Container, Top, Title,SubTitle, TasksContainer, DoneTasks} from "./styles";
import { useState } from "react";

const DoneList = () => {
    const [tasks,setTasks] = useState([{'id':'1','title':'abluble','completed':true},{'id':'500','title':'abluble2','completed':true}])

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
            <Title>Done</Title>
            <SubTitle>Congratulions!</SubTitle>
            <DoneTasks>You have done 5 tasks</DoneTasks>
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

export default DoneList;