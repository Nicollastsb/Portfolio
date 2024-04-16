import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ProfileCardContainer = styled.div`
    padding: 1.25rem 0 1.25rem;
    height: 100vh;
    background-color: ${props => props.theme['secondBackground']};
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
        >img {
            max-width: 25rem;
            width: 100%;
            border-radius: 50% 50% 50% 50%;
            border: 3px solid ${props => props.theme["base-text"]};
            padding: 1px;
        }
    }
`;

export const SocialButtons = styled.div`
    padding: 6px 10px;            
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 20px;

    @media(max-width: 680px){
        flex-direction: column;
        align-items: center;
    }
`;

export const SocialButtonStylle = styled.a`
    border-radius: 13px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    color: inherit; 
    text-decoration: inherit;
    border: 1px solid ${props => props.theme["base-text"]};

    >svg{
        margin: 6px 10px;
        &:hover{
            margin: 4px 8px;
            width: 30px;
            height: 30px;
        }
    }
`;

export const LinkedInButtonStylle = styled(SocialButtonStylle)`
    >svg{
        &:hover{
            color: #0072b1;
        }
    }
`;

export const WhatsAppButtonStylle = styled(SocialButtonStylle)`
    >svg{
        &:hover{
            color: #25d366;
        }
    }
`;

export const GitHubButtonStylle = styled(SocialButtonStylle)`
    >svg{
        &:hover{
            color: #686AF0;
        }
    }
`;

export const EmailButtonStylle = styled(SocialButtonStylle)`
    padding: 0 10px 0 0;
    >svg{
        &:hover{
            color: #9ECBFF;
        }
    }
`;

export const ProfileCardTextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; 
    gap: 4.5rem;
`;

export const ProfileCardTitle = styled.span`
    ${mixins.fonts.profileCardTitle}  
`;


export const ProfileCardSubTitle = styled.span`
    ${mixins.fonts.profileCardText}  
`;

export const ProfileCardBottomContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    >a{
        background-color: ${props => props.theme['backgroundColor']};
        color: ${props => props.theme['textColor']};
        padding: 6px 10px;
        border-radius: 10px;
        ${mixins.fonts.ButtonText}  
        cursor: pointer;
        border: 1px solid ${props => props.theme["base-text"]};
    }
`;