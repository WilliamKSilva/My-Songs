import styled from "styled-components";

export const Container = styled.div`
    display: block;
    max-height: 40px;

    section.accordionHeader {
        display: flex;
        flex-direction: row;
        padding: 0.4rem 0.2rem;
        gap: 0.1rem;
        align-items: center;
        
        div.WrapperIcon {
            display: flex;
            align-items: center;            
            transition: 0.1;
        }

        div.WrapperIcon:hover {
            filter: brightness(0.6);
            cursor: pointer;            
        }  
        
        h1 {
            font-size: 1rem;            
            color: var(--text);
        }                
    }

    div.accordionContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        margin-left: 5rem;        
        width: 10vh;        
        padding: 0.5rem 0.5rem;

        background-color: var(--background-light);
        border: 2px solid var(--border);
                
        p {
            font-size: 0.70rem;
            text-align: center;
            margin-top: 0.5rem;            
            color: var(--text);                        
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
        }

        p:hover {
            filter: brightness(0.5);
        }
    }
`;