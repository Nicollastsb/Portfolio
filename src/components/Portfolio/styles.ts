import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PortfolioContainer = styled.div`
    padding: 1.5rem 0 3.5rem;        
    height: 100vh;
    background-color: ${props => props.theme['secondBackground']};
`;

export const PortfolioContent = styled.div`
    width: 100%;
    max-width: 65.5rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    gap: 3rem;
    
    display: flex;
    flex-direction: column;  
    height:auto;
`;

export const PortfolioTitleContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        span{
            ${mixins.fonts.titleL}  
        }
    }
    
    >p{
        ${mixins.fonts.textM} 
    }
`;

export const PortfolioItemsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    //grid-template-rows: repeat(2, 1fr);
    gap: 2.5rem 2rem; /* Espaçamento entre os elementos */
    width: 100%; /* Largura da grade */
    height: 100%; /* Altura da grade */
`;

export const ProjectCardContent = styled.div`
    width: 100%;
    min-height: 530px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //justify-content: center;
    background-color: ${props => props.theme["thirdBackground"]};
    gap: 1rem; 
    border-radius: 12px;    
    transition: 1s;       
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.27);
    
    position: relative;

    /* opacity: .8;
    transition: opacity .8s ease-out;
    -moz-transition: opacity .8s ease-out;
    -webkit-transition: opacity .8s ease-out;
    -o-transition: opacity .8s ease-out;

    &:hover{
        border-radius: 12px;   
        transition: 1s;        
        opacity: 1;
        background-color: ${props => props.theme["teal-550"]};
    }  */

    >img{
        width: 100%;
        padding: 1px;
        transition: 1s ease;   
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        /* &:hover{
            -webkit-transform: scale(1.3);
            -ms-transform: scale(1.3);
            transform: scale(1.3);
            transition: 1s ease;
        }      */
    }  

    /* &:last-child{
        border-bottom: 0;   
    } */
`;

export const FooterProjectCard = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    >div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 1.5rem;    
    }
`;

export const FooterLinks = styled.div`
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
`;

export const PortfolioItemsTextContent = styled.div`
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    >p{
        ${mixins.fonts.textCard}   
    }

    >h2{
        display: flex;
        align-self: center;
    }
    >span {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
`;

export const TecnologiesContent = styled.div`
    display: flex;
    flex-direction: row;    
    gap: 8px !important;

    div {        
        ${mixins.fonts.tecnologieCoda}    
        padding: 5px 8px;
        border-radius: 12px;  
        border: 1px solid ${props => props.theme["base-text"]};
    }
`;