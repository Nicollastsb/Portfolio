import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomePageCotainer = styled.div`

`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    position:fixed;
    right: 1rem;
    bottom: 1rem;    
    background-color: ${props => props.theme["secondBackground"]};
    padding:8px;
    border-radius: 10px;
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.27);
`;

export const ButtonBottom = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    background-color: transparent;
    border-radius: 50%;
    border: 1px solid ${props => props.theme['textColor']};
    cursor: pointer;
    color: ${props => props.theme['textColor']};

    &:focus{        
        border: none;
    }
`;


export const ButtonLanguageBottom = styled(ButtonBottom)`
    ${mixins.fonts.ButtonLanguage}  
    width: 2.875rem;
    height: 2.875rem;
`;