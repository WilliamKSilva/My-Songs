import { useMetrics } from "../../pages/Metrics/useMetrics";
import { Container } from "./styles";

export function Sidebar() {
    const { playlistData, isLoading } = useMetrics();
    var x = 5

    return (
        isLoading === true ? (
            <Container>
                <div className="content">
                    <h1>Top musics from the moment:</h1>                    
                      
                </div>
            </Container>
        ) : null
    );
}