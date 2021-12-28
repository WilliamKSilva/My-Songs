import { Container } from './styles';
import { BsClipboardData } from 'react-icons/bs'

export default function Home() {
    
    return (
        <Container>
            <div className="WrapperMain">
                <BsClipboardData style={{
                    fontSize: 250,
                    color: 'var(--primary)'                                                        
                }}/>                       
                <section className="infoContainer">
                    <h1>
                        Your Spotify metrics in the palm of your hand
                    </h1>                    
                    <p>
                        By Starting session with your spotify account <br />
                        you will have access to some options to choose <br />
                        like your <span>"Favorite artists"</span> and your <br />
                        <span>"Top Songs"</span>.<br /> <br />
                        Enjoy it! 😄
                    </p>
                </section>  
            </div>          
        </Container>
    );
}