import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ProfileCardContainer = styled.div`
    padding: 0 0 1.25rem;
`;

export const ProfileCardContent = styled.div`
    width: 100%;
    max-width: 47.5rem;
    margin: 0 auto;
    padding: 1.5rem 1.5rem;
    height: 12.313rem;
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
    border-radius: 10px;

    >img {
        max-width: 140px;
        border-radius: 50% 50% 50% 50%;
        border: 3px solid ${props => props.theme["base-text"]};
        padding: 1px;
        margin: 5px;
    }
`;

export const ProfileCardTextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    padding: 1.25rem;
    
    div:nth-of-type(1) {
        ${mixins.fonts.titleS}        
    }
    
    div:nth-of-type(2) {
        
        ${mixins.fonts.textM}    
        display: flex;
        margin-top: auto;  
        gap: 1rem;
        >a {
            padding: 6px 10px;
            border-radius: 13px;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            cursor: pointer;
            color: inherit; 
            text-decoration: inherit;
            border-bottom: 1px solid ${props => props.theme["base-text"]};
        }
    }
`;