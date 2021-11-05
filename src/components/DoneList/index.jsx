import { Button } from "antd";
import Task from "../Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Container, Top, Title,SubTitle, TasksContainer, DoneTasks} from "./styles";
import { useTask } from "../../providers/Task";

const DoneList = () => {
    const {tasks, setTasks, removeIncompleted } = useTask();
    const doneTasks = tasks?.filter((filtered) => filtered.completed);

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
            <DoneTasks>You have done {doneTasks.length} tasks</DoneTasks>
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={"ToDoTasks"}>
            {(provided) => (
                <TasksContainer {...provided.droppableProps} ref={provided.innerRef}>
                    {doneTasks?.map((task, index) =>{
                    return  <Task key={task.id} index={index} task={task}></Task>
                    })}
                    {provided.placeholder}
                </TasksContainer>
            )}
            </Droppable>
            </DragDropContext>
            <Button type="primary" onClick={removeIncompleted}>erase all</Button>
        </Container>
    );
};

export default DoneList;