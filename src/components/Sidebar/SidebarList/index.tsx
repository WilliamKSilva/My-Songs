import { useMetrics } from "../../../pages/Metrics/useMetrics";
import { Container } from "./styles";

export function SidebarList() {
    const { playlistTracks, isLoading } = useMetrics();       

    return (
        isLoading === false ? (
            <Container>        
                {playlistTracks.tracks.items.slice(0, 5).map(item => (
                    <li key={item.track.id}>
                        <strong>{item.track.name}</strong>                        
                    </li>
                ))}
            </Container>
        ) : null
    );
}





