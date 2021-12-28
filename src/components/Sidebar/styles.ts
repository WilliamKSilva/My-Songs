import styled from "styled-components";
import 'animate.css';

export const Container = styled.section`
    position: sticky;
    height: 100vh;

    @media (max-width: 480px){
        display: none;
    }

    @media(max-width: 998px){       
        width: 30%;
    }
    
    width: 17%;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);            

    animation: slideInLeft;
    animation-duration: 2s;
    
    background-color: #222222;    
    
    div.content {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        height: 70vh;        
        border-bottom: 2px solid var(--border);
        

        h1 {
            color: var(--primary);            
            font-weight: 800;
            font-size: 1.2rem;
            margin-top: 4rem;
        }
    }
`;

export const SidebarFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    margin-top: 2.5rem;
    margin-left: 0.5rem;


    strong {
        font-size: 0.85rem;
        color: var(--text);
    }

    a {
        font-size: 0.85rem;
        font-weight: 800;
        color: var(--primary);
    }
`;
