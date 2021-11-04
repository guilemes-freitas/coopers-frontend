import styled from "styled-components";

export const Container = styled.li`
    height: 42px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 0.5rem;
    :focus{
        button{
            opacity: 1;
        }
    }
    :hover{
        button{
            opacity: 1;
        }
    }
`;

export const CheckButton = styled.button`
    width: 14px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid var(--orange);
    background-color: transparent;
`;

export const CompletedIcon = styled.img`
    width: 16px;
    height: 16px;
    border-radius: 50%;
`;

export const DeleteButton = styled.button`
    opacity: 0;
    background-color: transparent;
    border: none;
    font-weight: bold;
    font-size: 12px;
    color: var(--grey);
`;

export const Input = styled.input`
    width: 139px;
    border: none;
    font-family: 'Montserrat';
    font-size: 12px;
    color: var(--orange);
    :focus{
        outline: none;
    }
    ::placeholder{
        font-family: 'Montserrat';
        font-size: 12px;
        color: var(--black);
        opacity: 1;
    }
`;
