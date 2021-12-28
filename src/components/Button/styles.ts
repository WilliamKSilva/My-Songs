import styled from "styled-components";

export const DefaultButton = styled.button`
    display: flex;
    padding: 0.6rem 1.5rem;
    background-color: var(--primary);
    
    border: 0px;
    border-radius: 8px; 
    
    color: var(--text);
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;

    transition: 0.2s;    

    &:hover {
        filter: brightness(0.5);
    }
`;