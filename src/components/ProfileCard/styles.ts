import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ProfileCardContainer = styled.div`
    padding: 1.25rem 0 1.25rem;
    height: 100vh;
    background-color: ${props => props.theme['backgroundColor']};
`;

export const ProfileCardContent = styled.div`
    width: 100%;
    max-width: 71.25rem;
    margin: 0 auto;
    padding: 1.5rem 1.5rem;
    height: 80vh;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4.5rem;
    border-radius: 10px;
    
    @media(max-width: 680px){
        height: 30rem;
        flex-direction: column;
        align-items: center;
    }
    
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 20px;
        >img {
            max-width: 25rem;
            width: 100%;
            border-radius: 50% 50% 50% 50%;
            border: 3px solid ${props => props.theme["base-text"]};
            padding: 1px;
        }
    }
`;

export const ProfileCardTextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; 
    gap: 2rem;
    padding: 20px;
    border-radius: 20px;
`;

export const ProfileCardTitle = styled.span`
    ${mixins.fonts.profileCardTitle}  
`;

export const ProfileCardSubTitle = styled.span`
    ${mixins.fonts.profileCardText}  
    padding-bottom: 40px;
`;

export const ImagesTools = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap:8px;
    justify-items: center;
    background-color: ${props => props.theme["secondBackground"]};
    padding: 15px;
    border-radius: 20px;
    border: 3px solid ${props => props.theme["base-text"]};
`;

export const ImgItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px;
      
    >img{
        width: 40px;
        height: 40px;
    }
    >span{
        ${mixins.fonts.textS}  
    }
`;

export const ConhecimentoEm = styled.span`
    ${mixins.fonts.textM}  
`;

export const ProfileDownloadCV = styled.span`    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 15px;
    border-radius: 20px;
    border: 3px solid ${props => props.theme["base-text"]};

    >span {
        ${mixins.fonts.SimpleText}  
    }

    >a {        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 8px;

        background-color: ${props => props.theme['secondBackground']};
        color: ${props => props.theme['textColor']};
        padding: 6px 10px;
        border-radius: 10px;
        ${mixins.fonts.ButtonText}  
        cursor: pointer;
        border: 2px solid ${props => props.theme["base-text"]};
    }
`;