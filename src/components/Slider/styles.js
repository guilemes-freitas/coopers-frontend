import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: var(--green);
    height: 504px;
    position: relative;
    text-align: center;

    margin-top: 2rem;
    margin-bottom: 10rem;
     .slider-wrapper{
         height: 520px;

    }
    div > ul > .dot{
        background: #C4C4C4 !important;
        box-shadow: none !important;
        width: 29px !important;
        height: 29px !important;
        opacity: 1 !important;
    }
    div > ul > .dot.selected{
        background: var(--green) !important;
    }
    .carousel-slider{
        width: 100%;
    }
`;

export const Title = styled.h3`
    font-size: 32px;
    font-weight: bold;
    color: var(--white);
    font-family: 'Montserrat';
    height: 80px;
    margin-top: 20px;
`;