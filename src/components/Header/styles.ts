import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
    padding: 1.25rem 0 1.25rem;
    ${mixins.fonts.titleCoda}
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 47.5rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;