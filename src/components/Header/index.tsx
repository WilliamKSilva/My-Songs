import { Button } from "../Button";
import { Container } from "./styles";
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { useAuth } from "../../hooks/useAuth";

export function Header() {
    const { onLogin } = useAuth();

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
                <Button 
                    title="Teste"
                    onClick={onLogin}
                />
            </section>            
        </Container>
    );
}