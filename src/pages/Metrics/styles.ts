import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 480px){
        height: 110vh;
    }
`;

export const MetricContainer = styled.section`
    display: flex;
    margin: 0 auto;    
    margin-top: 12rem;

    @media (max-width: 480px){
        width: 50vh;
        margin-top: 5rem;
    }

    @media(max-width: 998px){       
      width: 50vh;
    }

    div.content {
        width: 100vh;
        height: 70%;        
        border-radius: 5.5px;
        background-color: #222222;
        border: 2px solid var(--border); 
        
        @media (max-width: 480px){            
            height: 78vh;
            width: 50vh;
        }

        @media(max-width: 998px){       
            height: 78vh;
        }
    }

    header {
        display: flex;
        align-items: center;        
        padding: 2rem 2rem;

        div.WrapperTitle {            
            position: absolute;
            left: 50%;
        }

        h1 {
            font-size: 1rem;
            word-wrap: break-word;
            color: var(--primary);            
        }
    }
`;
