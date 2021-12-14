import styled from "styled-components";

export const Container = styled.footer`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--background-strong);

    section {
        display: flex;
        justify-content: center;
        padding: 25px 60px;
        border-top: 2px solid var(--background-light);

        a {
            font-size: 18px;            
            color: var(--text);
            text-decoration: none;
            transition: 0.2s;

            &:hover {
                filter: brightness(0.5);
            }
        }
    }
`;