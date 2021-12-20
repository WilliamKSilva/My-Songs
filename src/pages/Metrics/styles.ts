import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const MetricContainer = styled.section`
    display: flex;
    margin-top: 15rem;

    div.content {
        width: 100vh;
        height: 50vh;
        background-color: #222222;
        border: 2px solid var(--border);       
    }

    header {
        padding: 2rem 2rem;
    }
`;
