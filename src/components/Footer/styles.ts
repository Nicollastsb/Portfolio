import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 1.25rem 0 1.25rem;
    bottom: 0;
    width: 100%;
    
    background: rgb(46, 46, 46);
    color: white;
    overflow-x: hidden;
`;

export const FooterContent = styled.div`
    width: 100%;
    max-width: 65.5rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: .6;
`;

export const IconsFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    >a {        
        color: inherit; 
        text-decoration: inherit;
    }
`;