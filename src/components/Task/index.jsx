import { CheckButton, CompletedIcon, DeleteButton, Container, Input } from "./styles";
import { Draggable } from "react-beautiful-dnd";
import Completed from '../../assets/images/icon-completed.svg'

const Task = ({index,task}) => {
  const handleChange = (event) => {
    if(event.target.value.length === 1){
      event.target.value = task.title + event.target.value
    }
  }

  const handleUpdate = (event) =>{
    event.target.value=""
  }
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <Container 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef} 
            >
              {task.completed ? <CompletedIcon src={Completed}/> : <CheckButton/>}
              <Input placeholder={task.title} onChange={(event) =>handleChange(event)} onBlur={(event) => handleUpdate(event)}></Input>
              <DeleteButton>delete</DeleteButton>
            </Container>
    )}</Draggable>
  );
};

export default Task;