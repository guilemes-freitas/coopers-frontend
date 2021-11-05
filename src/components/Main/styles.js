import styled from "styled-components";


export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StartContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1030px) {
        justify-content: space-between;
    } 

`;

export const Grafism = styled.img`
    position: absolute; 
    right: 90%;
    top: 3%;
    z-index: -1;
    width: 267px;
    @media screen and (min-width: 1030px) {
        width: 671px;
        right: 93%;
    } 
`;

export const TitleContainer = styled.div`
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
        font-weight: 600;
        font-family: 'Montserrat';
    }
    margin-bottom: 8rem;
    margin-top: 5rem;
    padding: 1rem;
    @media screen and (min-width: 720px) {
        margin-left: 4rem;
        .ant-btn-primary {
            width: 300px;
            height: 64px;
            align-self: flex-start;
            font-size: 24px;
        }
    } 
`
export const ImageContainer = styled.div`
    display: none;
    position: relative;
    @media screen and (min-width: 1030px) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    } 
`;

export const Logo = styled.img`
    position: absolute;
    z-index: -1;
    width: 100%;
    left: 0;
`;

export const Landing = styled.img`
    max-width: 430px;
    width: 80%;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 48px;
    height: 50px;
    @media screen and (min-width: 720px) {
        font-size: 80px;
        height: 80px;
    } 
`;

export const Subtitle = styled.h2`
    font-size: 36px;
    color: var(--green);
    @media screen and (min-width: 720px) {
        font-size: 60px;
    } 
`;

export const Description = styled.span`
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 2rem 0 4rem;
    @media screen and (min-width: 720px) {
        font-size: 24px;
    } 
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
    @media screen and (min-width: 720px) {
        height: 420px;
        z-index: -2;
    }
`;

export const TodoListTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    color: var(--white);
    text-decoration: underline 4px;
    text-decoration-color: var(--green);
    @media screen and (min-width: 720px) {
        font-size: 60px;
    } 
`;

export const TodoListDescription = styled.p`
    color: var(--white);
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    width: 60%;
    max-width: 600px;
    @media screen and (min-width: 720px) {
        font-size: 24px;
    } 
`

export const ListContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    gap: 2rem;
    @media screen and (min-width: 720px) {
        flex-direction: row;
        width: 100%;
    } 
`;