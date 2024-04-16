import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
    padding: 1.25rem 0 1.25rem;
    ${mixins.fonts.titleCoda}
    border-bottom: 1px solid ${props => props.theme["base-text"]}; 
    position: fixed;
    width: 100%;
    z-index: 9999;
    background-color: ${props => props.theme['thirdBackground']};
    top: 0;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 71.25rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;

export const SocialButtonStylle = styled.a`
    border-radius: 13px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    color: inherit; 
    text-decoration: inherit;

    >svg{
        margin: 6px 8px;
        &:hover{
            margin: 4px 6px;
            width: 30px;
            height: 30px;
            transition: 250ms;
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