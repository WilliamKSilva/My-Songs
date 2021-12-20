import { Sidebar } from "../../components/Sidebar";
import { SidebarList } from "../../components/Sidebar/SidebarList";
import { Container } from "./styles";
import { useMetrics } from "./useMetrics";

export default function Metrics() {
    const { isLoading } = useMetrics();

    return (
        isLoading === false ? (
            <Container>
                <Sidebar />
            </Container>
        ) : null
    )
}