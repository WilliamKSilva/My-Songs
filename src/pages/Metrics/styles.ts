import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const MetricContainer = styled.section`
    display: flex;
    margin-top: 12rem;

    div.content {
        width: 100vh;
        height: 65vh;
        border-radius: 5.5px;
        background-color: #222222;
        border: 2px solid var(--border);       
    }

    header {
        display: flex;
        align-items: center;        
        padding: 2rem 2rem;

        div.WrapperTitle {            
            position: absolute;
            left: 45.5%;            
        }

        h1 {
            font-size: 25px;
            color: var(--primary);
        }
    }
`;
