import styled from "styled-components";

export const Container = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    
    justify-content: center;
    align-items: center;

    background-color: var(--background-strong);

    section {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        padding: 25px 50px;
        border-top: 2px solid var(--background-light);        

        a {
            font-size: 1rem;            
            color: var(--text);            
            text-decoration: none;
            transition: 0.2s;

            &:hover {
                filter: brightness(0.5);
            }
        }
    }
`;