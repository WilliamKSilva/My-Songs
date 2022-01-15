import { Container } from "./styles";

export function ContainerList({ fetchingData, metricsData }: any) {        
    
    return (                        
        fetchingData === false ? (                       
                <Container>                    
                    {metricsData.items.slice(0, 6).map((items: any) => (                        
                        <li key={items.id}>
                            {items.images?.slice(0, 1).map((images: any) => (
                                <img width={40} src={images.url} alt=""/>
                            ))}
                            {items.album?.images.slice(0, 1).map((albums: any) => (
                                <img width={40} src={albums.url} alt=""/>
                            ))}                                                                                      
                            <p>{items.name}</p>
                        </li>
                    ))}
                </Container>            
        ): null
    )
}