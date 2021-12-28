import { Accordion } from "../../components/Accordion";
import { Sidebar } from "../../components/Sidebar";
import { ContainerList } from "./ContainerList";
import { Container, MetricContainer } from "./styles";
import { useMetrics } from "./useMetrics";
import { Loading } from "../../components/Loading";

export default function Metrics() {
    const { metricsData, fetchingData, currentParams, setCurrentParams, isLoading } = useMetrics();    

    return isLoading === true ? ( <Loading /> ) :       
            (
            <Container>
                <Sidebar />
                <MetricContainer>
                    <div className="content">
                        <header>
                            <Accordion setCurrentParams={setCurrentParams}/>
                            <div className="WrapperTitle">
                                <h1>Your favorite {currentParams}!</h1>
                            </div>
                        </header>
                        <ContainerList fetchingData={fetchingData} metricsData={metricsData}/>                                                    
                    </div>
                </MetricContainer>                              
            </Container>                
    )
}