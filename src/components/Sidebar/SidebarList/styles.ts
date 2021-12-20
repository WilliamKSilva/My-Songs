import styled from "styled-components";

export const Container = styled.ul`       
    background-color: #222222;
    list-style-type: decimal;    

    justify-content: center;
    align-items: center;
    
    li {
        margin-top: 5rem;
    }

    li::marker {
        font-size: 20px;
        color: var(--primary);
    }

    strong {
        font-size: 17px;
        color: var(--text);
    }
`;
