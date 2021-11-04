import { Button } from "antd";
import { Container, Title, Subtitle, Description, TitleContainer, 
  ToDoListTitleContainer,TodoListTitle,TodoListDescription, ListContainer } from "./styles";
import Scroll from "../../assets/images/icon-scroll.svg"
import ToDoList from "../ToDoList";
import DoneList from "../DoneList";
import Slider from "../Slider";
import { useRef } from "react";

const Main = () => {
  const Todo = useRef(null)
  const executeScroll = () => {Todo.current.scrollIntoView()};  
  return (
    <Container>
        <TitleContainer>
            <Title>Organize</Title>
            <Subtitle>your daily jobs</Subtitle>
            <Description>The only way to get things done</Description>
            <Button type="primary" onClick={executeScroll}>Go to To-do list</Button>
        </TitleContainer>
        <img src={Scroll} alt="" />
        <ToDoListTitleContainer>
            <TodoListTitle>To-do List</TodoListTitle>
            <TodoListDescription>Drag and drop to set your main priorities, check when done and create what´s new.</TodoListDescription>
        </ToDoListTitleContainer>
        <ListContainer ref={Todo}>
          <ToDoList></ToDoList>
          <DoneList></DoneList>
        </ListContainer>
        <Slider></Slider>
    </Container>
  );
};

export default Main;