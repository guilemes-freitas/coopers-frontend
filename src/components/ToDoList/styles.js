import styled from "styled-components";

export const Container = styled.div`
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
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
    @media (min-width: 1030px) {
        width: 380px;
    }
`;

export const Top = styled.div`
    width: 100%;
    height: 14px;
    background-color: var(--orange);
    @media (min-width: 1030px) {
        height: 20px;
    }
`;

export const Title = styled.h2`
    font-size: 36px;
    font-family: 'Poppins';
    font-weight: 600;
    @media (min-width: 1030px) {
        font-size: 40px;
    }
`;

export const SubTitle = styled.span`
    font-size: 18px;
    font-family: Montserrat;
    font-weight: normal;
    @media (min-width: 1030px) {
        font-size: 24px;
    }
`;

export const Input = styled.input`
    width: 139px;
    border: none;
    font-weight: bold;
    font-size: 12px;
    color: var(--black);
    height: 24px;
    ::placeholder{
        font-weight: bold;
        font-size: 12px;
        color: var(--black);
        opacity: 1;
    }
    @media (min-width: 1030px) {
        ::placeholder{
            font-size: 16px;
        }
    }
`;

export const TasksContainer = styled.ul`
    width: 84%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0.5rem;
`;

export const Image = styled.img`
    width: 24px;
    height: 24px;
`;

export const InputContainer = styled.div`
    margin-top: 1rem;
    width: 80%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: flex-start;
`;