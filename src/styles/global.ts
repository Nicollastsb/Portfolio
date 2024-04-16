import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['teal-550']};
    }

    body {
        //background-color: ${props => props.theme['backgroundColor']};
        color: ${props => props.theme['textColor']};
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        transition: 0.500s; 
        padding-top: 79px;
    }

    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
    }
`;