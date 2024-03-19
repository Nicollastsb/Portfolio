import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PortfolioContainer = styled.div`
    padding: 0 0 1.25rem;
`;

export const PortfolioContent = styled.div`
    width: 100%;
    max-width: 47.5rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    gap: 16px;
    
    display: flex;
    flex-direction: column;
`;

export const PortfolioTitleContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    ${mixins.fonts.titleL}     
`;

export const PortfolioItemsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    >div{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        gap: 12px;
        padding: 1.5rem 1.5rem;
        border-bottom: 1px solid ${props => props.theme["base-text"]};    
        border-radius: 12px;    
        transition: 1s;       
        
        opacity: .8;
        transition: opacity .8s ease-out;
        -moz-transition: opacity .8s ease-out;
        -webkit-transition: opacity .8s ease-out;
        -o-transition: opacity .8s ease-out;
    
        &:hover{
            border-radius: 12px;   
            transition: 1s;        
            opacity: 1;
            background-color: ${props => props.theme["teal-550"]};
        } 
    
        >img{
            width: 25%;
            border-radius: 12px;  
            padding: 1px;
            border: 2px solid ${props => props.theme["base-text"]};
            transition: 1s ease;   
            &:hover{
                -webkit-transform: scale(1.2);
                -ms-transform: scale(1.2);
                transform: scale(1.2);
                transition: 1s ease;
            }     
        }  

        &:last-child{
            border-bottom: 0;   
        }
    }
`;

export const PortfolioItemsTextContent = styled.div`
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 20px;

    >h2{
        display: flex;
        align-self: self-start;
    }
    >span {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    >div{
        display: flex;
        flex-direction: row;
        gap: 20px;
        >a {   
            display: flex;
            flex-direction: row;         
            align-items: center;
            color: inherit; 
            text-decoration: inherit;
            gap: 8px;
        }
    } 
`;