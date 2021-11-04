import styled from "styled-components";

export const Container = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-family: 'Poppins';
    background-color: var(--black);
    height: 246px;
    clip-path: polygon(100% 0,100% 0,100% 0,100% 100%,0 100%,0 25%);
`;

export const Text = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: var(--white);
`;

export const Description = styled.span`
    font-size: 14px;
`;

export const BottomDiv = styled.div`
    background-color: var(--green);
    width: 241px;
    height: 41px;
    position: absolute;
    bottom: 0;
    clip-path: polygon(100% 0,100% 0,100% 0,100% 100%,0 100%,0 25%);
`;