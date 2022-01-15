import styled from "styled-components";
import 'animate.css';

export const Container = styled.main`        
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeInUp;
    animation-duration: 1s;

    div.WrapperMain {
        display: flex;
        justify-content: center;
        align-items: center;

        @media(max-width: 480px){       
            flex-direction: column;
            margin-top: 2rem;
            height: 100vh;
        }
    }
    
    section.infoContainer {
        position: relative;                
        padding: 5rem;
        width: 60vh;               
        
        h1 {
            font-weight: 600;
            padding: 0.3rem;
            color: var(--primary);
            font-size: 1rem;
            text-align: center;

            @media(max-width: 480px){       
                font-size: 1.1rem;
                padding: 0rem;
            }
            
        }

        p {
            font-size: 0.9rem;
            margin-top: 2.5rem;
            color: var(--text);
            text-align: center;
            
            @media(max-width: 480px){       
                font-size: 1rem;      
            }
        }

        span {
            color: var(--primary);
            font-size: 0.9rem;
        }
    }

    
`;