import { createGlobalStyle } from "styled-components";

import ForumWoff from "../fonts/forum-regular-webfont.woff";
import InterRegularWoff from "../fonts/inter-regular-webfont.woff";
import InterMediumWoff from "../fonts/inter-medium-webfont.woff";
import InterSemiBoldWoff from "../fonts/inter-semibold-webfont.woff";
import InterBoldWoff from "../fonts/inter-bold-webfont.woff";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "Forum";
        src: url(${ForumWoff}) format("woff");
        font-weight: 400;
        font-style: normal;
    }



    @font-face {
        font-family: "Inter Regular";
        src: url(${InterRegularWoff}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "Inter Medium";
        src: url(${InterMediumWoff}) format("woff");
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: "Inter SemiBold";
        src: url(${InterSemiBoldWoff}) format("woff");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "Inter Bold";
        src: url(${InterBoldWoff}) format("woff");
        font-weight: 700;
        font-style: normal;
    }
`;

export default FontStyles;
