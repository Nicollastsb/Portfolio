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
        background-color: ${props => props.theme['teal-800']};
        color: ${props => props.theme['white']};
        -webkit-font-smoothing: antialiased;
        height: 100vh;
    }

    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
    }
`;