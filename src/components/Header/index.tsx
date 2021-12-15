import { Button } from "../Button";
import { Container } from "./styles";
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { useAuth } from "../../hooks/useAuth";
import { AccordionUser } from "../AccordionUser";

export function Header() {
    const { onLogin, authData } = useAuth();

    return (
        <Container>
            <section>
                <div className="WrapperLogo">
                    <MdOutlineLibraryMusic 
                        style={{
                            color: '#3ba55d',                            
                            fontSize: 30                                                                                    
                        }}                        
                    />
                    <a href="/">
                        My Songs
                    </a>
                </div>
                {authData.access_token === undefined ? (
                    <Button 
                    title="Log in"
                    onClick={onLogin}
                    /> ) : ( <AccordionUser /> ) 
                }                    
            </section>            
        </Container>
    );
}