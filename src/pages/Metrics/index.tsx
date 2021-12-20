import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { Sidebar } from "../../components/Sidebar";
import { Container, MetricContainer } from "./styles";
import { useMetrics } from "./useMetrics";

export default function Metrics() {
    const { isLoading } = useMetrics();

    return (
        isLoading === false ? (
            <Container>
                <Sidebar />
                <MetricContainer>
                    <div className="content">
                        <header>
                            <Accordion />
                        </header>                        
                    </div>
                </MetricContainer>                
            </Container>
        ) : null
    )
}