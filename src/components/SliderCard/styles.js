import styled from "styled-components";

export const Container = styled.div`
    width: 260px;
    height: 430px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    box-shadow: 8px 8px 24px rgba(12, 41, 208, 0.16);
    background-color: var(--white);
    position: relative;
    @media screen and (min-width: 1030px) {
        width: 300px;
    }
    @media screen and (min-width: 1400px) {
        width: 360px;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 16px 16px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
`;

export const Tag = styled.span`
    align-self: flex-start;
    text-align: center;
    border: 1px solid var(--grey);
    width: 86px;
    height: 30px;
    border-radius: 16px;
    color: var(--grey);
`;

export const Description = styled.p`
    color: var(--darkBlue);
    height: 100px;
`;

export const ReadMore = styled.span`
    align-self: flex-start;
    color: var(--green);
`;

export const TextContainer = styled.div`
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 85%;

    text-align: start;
`;

export const Icon = styled.img`
    position: absolute;
    width: 38px !important;
    height: 56px;
    bottom: 47%;
    right: 1rem;
`