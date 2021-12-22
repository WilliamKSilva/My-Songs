import { useState } from 'react';
import { Container } from './styles';
import { MdKeyboardArrowRight } from 'react-icons/md'

export function Accordion({ setCurrentParams }: any) {            
    
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
                    <p onClick={() => setCurrentParams('artists')}>Top artists</p>
                    <p onClick={() => setCurrentParams('tracks')}>Top songs</p>
                </div>        
            )}   
        </Container>
    );
}