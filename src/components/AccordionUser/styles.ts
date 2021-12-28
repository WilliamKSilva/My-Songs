import styled from "styled-components";

export const Container = styled.div`
    display: block;
    max-height: 40px;

    section.accordionHeader {
        display: flex;
        flex-direction: row;
        padding: 0rem 0.2rem;
        gap: 0.2rem;
        align-items: center;        
    }

    div.accordionContent {
        display: flex;
        background-color: var(--background-light);        
        justify-content: center;
        border: 2px solid var(--border);
        padding: 0.5rem 0.5rem;
        
        a {
            font-size: 0.65rem;
            color: var(--text);
            font-weight: 600;
            cursor: pointer;
        }
    }
`;