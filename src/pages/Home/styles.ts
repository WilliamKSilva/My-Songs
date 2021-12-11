import styled from "styled-components";

export const Container = styled.main`        
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
        
    div.infoContainer {
        position: relative;                
        padding: 2rem;
        width: 60vh;
        margin-bottom: 15rem;
                
        
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