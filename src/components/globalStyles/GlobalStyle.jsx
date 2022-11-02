import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: "Girassol",cursive;
    }
    body{
        font-size: 1.5rem;
        background:${({ theme }) => theme.colors.mainColor};
    }

`;
