import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *,*::before,*::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    body {
        font-family: Inter Regular;
        background-color: ${({ theme }) => theme.colors.white};
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5 {
        line-height: 1.1;
    }

    p {
        line-height: 1.3;
    }

    a {
        display: inline-block;
        text-decoration: none;
        margin: 0.2rem;

    }

    li {
        list-style-type: none;
    }

    button {
        display: inline-block;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        background: none;
        border: none;
    }

    span {
        display: inline-block;
    }


    .word-container {
        overflow: hidden;

        .name {
            transform-style: preserve-3d;
        }
    }
`;

export default GlobalStyles;
