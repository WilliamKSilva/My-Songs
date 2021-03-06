import { Button } from "../Button";
import { Container } from "./styles";
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { useAuth } from "../../hooks/useAuth";
import { AccordionUser } from "../AccordionUser";

export function Header() {
    const { onLogin, isLogged } = useAuth(); 

    return (
        <Container>
            <section>
                <div className="WrapperLogo">
                    <MdOutlineLibraryMusic 
                        style={{
                            color: '#3ba55d',                            
                            fontSize: 50                                                                                    
                        }}                        
                    />
                    <a href="/">
                        My Songs
                    </a>
                </div>
                {isLogged === false ? (
                    <Button 
                        title="LogIn"
                        onClick={onLogin}
                    />                    
                ): <AccordionUser />}
                                                                                
            </section>            
        </Container>
    );
}