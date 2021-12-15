import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--background-strong);
    display: block;
    position: relative;        
    
    section {
        max-width: 1120px;
        margin: 0 auto;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between; 
              

        padding: 2.2rem 0.3rem;        
        

        div.WrapperLogo {
            display: flex;
            flex-direction: row;
            align-items: center;
            transition: transform .2s;

            &:hover {
                transform: scale(1.1);
            }            
        }
        
        
        a {
            font-size: 25px;
            margin-left: 10px;
            font-weight: 600;
            text-decoration: none;
            color: var(--primary);  
                        
        }
        
    }
`;