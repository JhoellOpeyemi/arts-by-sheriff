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
        color: ${({ theme }) => theme.colors.black};
        font-size: 1rem;

        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.colors.white};
        }

        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.bodyBg};
            border-radius: 20px;
        }

        @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
            overflow-x: hidden;
            overflow-y: scroll
        }
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

    *::-webkit-scrollbar {
        width: 0;
    }


    
`;

export default GlobalStyles;
