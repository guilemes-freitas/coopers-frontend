import styled from "styled-components";

export const Container = styled.div`
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
    .ant-btn-primary {
        margin-top: 1rem;
        border-radius: 10px;
        background: var(--black);
        width: 210px;
        height: 44px;
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 1rem;
    }
`;

export const Top = styled.div`
    width: 100%;
    height: 14px;
    background-color: var(--green);
`;

export const Title = styled.h2`
    font-size: 36px;
    font-family: 'Poppins';
    font-weight: 600;
`;

export const SubTitle = styled.span`
    font-size: 18px;
    font-family: Montserrat;
    font-weight: normal;
`;

export const DoneTasks = styled.span`
    font-size: 18px;
    font-family: Montserrat;
    font-weight: bold;
`;
export const Input = styled.input`
    margin-top: 1rem;
    width: 80%;
    border: none;
    font-weight: bold;
    font-size: 12px;
    color: var(--black);
    ::placeholder{
        font-weight: bold;
        font-size: 12px;
        color: var(--black);
        opacity: 1;
    }
`;

export const TasksContainer = styled.ul`
    width: 100%;
`;