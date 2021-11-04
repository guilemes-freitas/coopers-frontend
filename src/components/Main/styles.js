import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleContainer = styled.section`
    text-align: left;
    display: flex;
    flex-direction: column;
    .ant-btn-primary {
        border-radius: 10px;
        background: var(--green);
        border-color: transparent;
        width: 258px;
        height: 43px;
        align-self: center;
    }
    margin-bottom: 8rem;
    margin-top: 5rem;
    padding: 1rem;
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: 48px;
    height: 50px;
`;

export const Subtitle = styled.h2`
    font-size: 36px;
    color: var(--green);
`;

export const Description = styled.span`
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 2rem 0 4rem;
`

//Inicio da todo-list
export const ToDoListTitleContainer = styled.section`
    background-color: var(--black);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    text-align: center;
    clip-path: polygon(100% 0,100% 0,100% 0,100% 75%,0 100%,0 25%);
    height: 245px;
    margin-bottom: 2rem;
`;

export const TodoListTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    color: var(--white);
    text-decoration: underline 4px;
    text-decoration-color: var(--green);
`;

export const TodoListDescription = styled.p`
    color: var(--white);
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    width: 60%;
    max-width: 600px;
`

export const ListContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;