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
    
    @media screen and (min-width: 1030px) {
        width: 100%;
        max-width: 1080px;
        border-radius: 10px;
        height: 520px;
    } 

    @media screen and (min-width: 1250px) {
        text-align: start;
        .carousel-slider{
            margin-left: 5rem;
            width: 106% !important;
        }
        .carousel .control-dots {
            width: 80%;
        }
    } 
`;

export const Title = styled.h3`
    font-size: 32px;
    font-weight: bold;
    color: var(--white);
    font-family: 'Montserrat';
    height: 80px;
    margin-top: 20px;

    @media screen and (min-width: 1250px) {
        height: 100px;
        margin-top: 4rem;
        margin-left: 5rem;
        align-self: flex-start;
        font-size: 48px;
    }
`;