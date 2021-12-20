import { useState } from 'react';
import { Container } from './styles';
import { MdKeyboardArrowRight } from 'react-icons/md'
import "animate.css";

export function AccordionUser() {    
    const [isVisible, setIsVisible] = useState(false);

    return (
        <Container>
            <section className="accordionHeader">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width={30}/> 
                <MdKeyboardArrowRight 
                    style={{
                        color: 'var(--primary)',
                        fontSize: 30,                        
                    }}
                    onClick={() => setIsVisible(!isVisible)}
                />                  
            </section> 
            {isVisible && (
            <div className="accordionContent">
                <p>Logout</p>
            </div>        
            )}   
        </Container>
    );
}