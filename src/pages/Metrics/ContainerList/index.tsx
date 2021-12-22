import { useMetrics } from "../useMetrics";
import { Container } from "./styles";


export function ContainerList() {
    const { fetchingData, metricsData } = useMetrics();    
    return (        
        fetchingData === false ? (
            <Container>
                {metricsData.items.slice(0, 6).map(items => (
                    <li key={items.id}>
                        {items.images?.slice(0, 1).map(images => (
                            <img width={50} src={images.url} alt=""/>
                        ))}                                                           
                        <p>{items.name}</p>
                    </li>
                ))}
            </Container>
        ): null
    )
}