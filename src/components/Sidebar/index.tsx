import { useMetrics } from "../../pages/Metrics/useMetrics";
import { SidebarList } from "./SidebarList";
import { Container } from "./styles";

export function Sidebar() {
       

    return (
        <Container>
            <div className="content">
                <h1>Top musics from the moment:</h1>
                <SidebarList />                      
            </div>
        </Container>

    );
}