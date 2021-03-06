import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--background-strong);
    position: relative;
    display: block;
    
    section {
        max-width: 1500px;        
        margin: 0 auto;                 
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;                              

        padding: 2.2rem 0rem;   
        
        @media(min-width: 998px) and (max-width: 998px){        
            padding: 2.2rem 3rem;
        }
        

        div.WrapperLogo {
            display: flex;
            flex-direction: row;
            align-items: center;
            transition: transform 0.2s;

            &:hover {
                transform: scale(1.1);
            }            
        }
        
        
        a {
            font-size: 1.6rem;
            margin-left: 10px;
            font-weight: 600;
            text-decoration: none;
            color: var(--primary);  
                        
        }
        
    }
`;