import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;

    width: 15%;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
    
    position: absolute;
    left: 0;
    
    background-color: #222222;
    
    div.content {
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            color: var(--text);
            font-size: 16px;
            margin-top: 4rem;
        }
    }
`;
