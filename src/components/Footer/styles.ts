import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 0.5rem 0 1.25rem;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export const FooterContent = styled.div`
    width: 100%;
    max-width: 47.5rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IconsFooter = styled.div`
    >a {        
        color: inherit; 
        text-decoration: inherit;
    }
`;