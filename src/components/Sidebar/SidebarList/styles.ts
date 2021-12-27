import styled from "styled-components";

export const Container = styled.ul`       
    background-color: #222222;
    width: 100%;
    list-style-type: decimal;        
    align-items: center;
    
    li {
        margin-top: 5rem;
        margin-left: 2rem;
        width: 100%;
    }

    li::marker {
        font-size: 1.2rem;
        color: var(--primary);
    }

    strong {
        font-size: 1rem; 
        word-wrap: break-word;
        color: var(--text);
    }
`;
