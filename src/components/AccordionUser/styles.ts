import styled from "styled-components";

export const Container = styled.div`
    display: block;
    max-height: 40px;

    section.accordionHeader {
        display: flex;
        flex-direction: row;
        padding: 0.4rem 0.2rem;
        gap: 0.rem;
        align-items: center;        
    }

    div.accordionContent {
        display: flex;
        background-color: var(--background-light);        
        justify-content: center;
        padding: 0.5rem 0.5rem;
        
        a {
            font-size: 12px;
            color: var(--text);
            font-weight: 600;
            cursor: pointer;
        }
    }
`;