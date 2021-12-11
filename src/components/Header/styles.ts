import styled from "styled-components";

export const Container = styled.header`
    max-width: 1120px;

    background-color: var(--secondary);    
    section {
        display: flex;
        margin: 0 auto;

        padding: 0 3rem;
        
        h1 {
            font-size: 15px;
            color: var(--text);
        }
    }
`;