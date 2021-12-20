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
    }
        
    section.infoContainer {
        position: relative;                
        padding: 2rem;
        width: 60vh;  
                
        
        h1 {
            font-size: 21px;
            font-weight: 600;
            padding: 2rem;
            color: var(--text);
            text-align: center;
        }

        p {
            font-size: 18px;
            color: var(--text);
            text-align: center;
            
        }

        span {
            color: var(--primary);
        }
    }

    
`;