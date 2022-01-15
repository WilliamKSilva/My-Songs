import styled from "styled-components";
import 'animate.css';

export const Container = styled.ul`
    background-color: #222222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    list-style-type: disc;
    
    animation: fadeIn;
    animation-duration: 2s;

    li {
        display: flex;
        gap: 2rem;
        align-items: center;
        padding: 0 5rem;
        
        border-bottom: 2px solid var(--border);
        width: 100%;        
        
        margin-top: 1.5rem;                

        p {
            font-size: 0.6rem;
            font-weight: 600;
            color: var(--text);
        }
    }
`;