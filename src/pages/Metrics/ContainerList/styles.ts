import styled from "styled-components";

export const Container = styled.ul`
    background-color: #222222;    
    list-style-type: disc;    

    li {
        display: flex;
        gap: 2rem;
        align-items: center;
        
        border-bottom: 2px solid var(--border);
        width: 50%;
        
        margin-left: 17rem;
        margin-top: 3.5rem;        

        p {
            font-size: 15px;
            font-weight: 600;
            color: var(--text);
        }
    }
`;