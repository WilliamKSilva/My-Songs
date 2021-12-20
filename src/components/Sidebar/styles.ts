import styled from "styled-components";
import 'animate.css';

export const Container = styled.section`
    position: fixed;
    height: 100%;

    width: 15%;
    left: 0;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);            

    animation: slideInLeft;
    animation-duration: 2s;
    
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
