import { useState } from 'react';
import { Container } from './styles';
import { MdKeyboardArrowRight } from 'react-icons/md'
import "animate.css";

export function Accordion() {    
    const [isVisible, setIsVisible] = useState(false);

    return (
        <Container>
            <section className="accordionHeader">
                <div className="WrapperIcon"> 
                    <h1>Options</h1>           
                    <MdKeyboardArrowRight 
                        style={{
                            color: 'var(--primary)',
                            fontSize: 30,                        
                        }}
                        onClick={() => setIsVisible(!isVisible)}
                    />
                </div>                
            </section> 
            {isVisible && (
            <div className="accordionContent">
                <p>Top artists</p>
                <p>Top songs</p>
                <p>Top albums</p>
            </div>        
            )}   
        </Container>
    );
}