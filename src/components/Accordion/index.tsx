import { useEffect, useState } from 'react';
import { Container } from './styles';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useMetrics } from '../../pages/Metrics/useMetrics';

export function Accordion() {        
    const { currentParams, setCurrentParams } = useMetrics();
    
    const [isVisible, setIsVisible] = useState(false);
    
    function teste() {
        setCurrentParams('tracks')
        console.log(currentParams)
    }

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
                    <p onClick={teste}>Top songs</p>
                </div>        
            )}   
        </Container>
    );
}