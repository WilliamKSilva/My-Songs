import ReactLoading from 'react-loading';
import { Container } from './styles';

export function Loading() {
    return (
        <Container>
            <ReactLoading type={'spin'} color={'#3ba55d'} height={500} width={200}/>
        </Container>
    )
}