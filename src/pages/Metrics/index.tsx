import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { Sidebar } from "../../components/Sidebar";
import { ContainerList } from "./ContainerList";
import { Container, MetricContainer } from "./styles";
import { useMetrics } from "./useMetrics";

export default function Metrics() {
    const { currentParams } = useMetrics();    

    return (       
            <Container>
                <Sidebar />
                <MetricContainer>
                    <div className="content">
                        <header>
                            <Accordion />
                            <div className="WrapperTitle">
                                <h1>Your favorite {currentParams}!</h1>
                            </div>
                        </header>
                        <ContainerList />                                                    
                    </div>
                </MetricContainer>                
            </Container>
    
    )
}