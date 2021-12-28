import { useState, useEffect } from 'react';
import { Container } from './styles';
import { MdKeyboardArrowRight } from 'react-icons/md'
import "animate.css";
import axios from 'axios';
import { IUser } from '../../interfaces/playlists';

export function AccordionUser({setIsLogged}: any) {    
    const [isVisible, setIsVisible] = useState(false);    
    const [ userData, setUserData ] = useState({} as IUser)
    const [isFetchingData, setIsFetchingData] = useState(true);

    const access_token = localStorage.getItem('access_token')

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://api.spotify.com/v1/me', 
                {                             
                    headers: {                                                            
                        Authorization: 'Bearer ' + access_token
                    },
                }         
                )
                setUserData(response.data)
                setIsFetchingData(false);
            } catch(err) {
                console.log(err)
            }
        })()
    })

    return (
        <Container>
            <section className="accordionHeader">
                {isFetchingData === false ? ( 
                    userData.images.slice(0, 1).map(images => (
                        <img src={images.url} alt="" width={65} style={{borderRadius: 35}}/>
                    ))
                    ) : null 
                }                    
                <MdKeyboardArrowRight 
                    style={{
                        color: 'var(--primary)',
                        fontSize: 50,                        
                    }}
                    onClick={() => setIsVisible(!isVisible)}
                />                  
            </section> 
            {isVisible && (
            <div className="accordionContent">
                <a onClick={() => setIsLogged(false)} href="/">Logout</a>
            </div>        
            )}   
        </Container>
    );
}