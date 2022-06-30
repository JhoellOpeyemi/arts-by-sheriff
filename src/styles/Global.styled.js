import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* fonts */
    @font-face {
    font-family: "Forum";
    src: url("forum-regular-webfont.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    }

    @font-face {
    font-family: "Inter Bold";
    src: url("inter-bold-webfont.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    }

    @font-face {
    font-family: "Inter Medium";
    src: url("inter-medium-webfont.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    }

    @font-face {
    font-family: "Inter Regular";
    src: url("inter-regular-webfont.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    }

    @font-face {
    font-family: "Inter SemiBold";
    src: url("inter-semibold-webfont.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    }

    *,*::before,*::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

    html {
        scroll-behavior: smooth;
    }

    
    h1,h2,h3,h4,h5 {
        line-height: 1.2;
    }

    p {
        line-height: 1.6;
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
`;

export default GlobalStyles;
