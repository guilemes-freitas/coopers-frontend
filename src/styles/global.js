import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, main, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --green: #4AC959;
        --orange: #E88D39;
        --black: #000000;
        --white: #ffffff;
        --grey: #9499B3;
        --darkBlue: #312F4F;
    }

    body{
        background: var(--white);
        color: var(--black);
    }
    body,button{
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: "Montserrat", sans-serif;
        color: var(--black);
    }

    button{
        cursor: pointer;
    }

    .ant-btn-primary {
        border-color: transparent;
    }
    a{
        text-decoration: none;
    }
`;