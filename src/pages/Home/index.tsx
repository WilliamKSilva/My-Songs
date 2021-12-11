import { Container } from './styles';
import { HiMusicNote } from 'react-icons/hi'

export default function Home() {
    return (
        <Container>
            <div className="infoContainer">
                <h1>
                    Your Spotify metrics in the palm of your hand
                </h1>
                <p>
                    By Starting session with your spotify account <br />
                    you will have access to some options to choose <br />
                    like your <span>"Favorite artists"</span>, <span>"Top songs"</span> and <br />
                    <span>"Most listened albuns"</span>.<br /> <br />
                    Enjoy it! 😄
                </p>
            </div>            
        </Container>
    );
}