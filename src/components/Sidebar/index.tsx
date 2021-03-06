import { SidebarList } from "./SidebarList";
import { Container, SidebarFooter } from "./styles";

export function Sidebar() {
       
    return (
        <Container>
            <div className="content">
                <h1>Top songs from the moment:</h1>
                <SidebarList />                                            
                <SidebarFooter>
                    <strong>If you are interested you can check the full playlist with all these musics 
                        <a href="https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF?si=85430935eccc4657"> here</a>.
                    </strong>    
                </SidebarFooter>
            </div>  
        </Container>

    );
}