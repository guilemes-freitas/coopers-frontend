import styled, { css } from "styled-components";

export const InputItem = styled.input`
    border-radius: 10px;
    font-family: 'Montserrat';
    border: 1px solid var(--black);
    ${(props) =>
        props.isErrored &&
        css`
            border-color: var(--red);
        `}
    background-color: transparent;
    color: var(--black);
    font-size: 16px;
    width: 100%;
    height: 100%;
    padding: 16px 24px;
    animation-name: ${(props) => props.errored && "error"};
    animation-duration: 0.075s;
    animation-iteration-count: 5;
    animation-direction: alternate;
    animation-fill-mode: backwards;

    @media (min-width: 800px) {
        font-size: 20px;
        padding: 24px 28px;
    }

    @keyframes error {
        from {
            transform: translateX(-10px);
        }
        to {
            transform: translateX(10px);
        }
    }
`;

export const Label = styled.label`
    font-size: 22px;
    font-family: 'Montserrat';
    color: var(--black);
    font-weight: 600;
    ${(props) =>
        props.isErrored &&
        css`
        z-index: 400;
        color: var(--red);
    `}
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 48px;
    @media screen and (min-width: 720px) {
        width: 50%;
        height: 36px;
    }
`;