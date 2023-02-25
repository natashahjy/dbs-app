import { BarCard, DoughnutCard, LineCard, PieCard, TableCard } from "./cards/subCard";
import React from "react";
import './ChartCard.css'

const DashboardCard = ( { inputObject, colorData } ) => {
    return (
        <div className='card-container'>
            {(() => {
                switch (inputObject.type) {
                case 'line':
                    return (<LineCard inputObject={inputObject} colorData={colorData}></LineCard>);
                case 'pie':
                    return (<PieCard inputObject={inputObject} colorData={colorData}></PieCard>);
                case 'bar':
                    return (<BarCard inputObject={inputObject} colorData={colorData}></BarCard>);
                case 'doughnut':
                    return (<DoughnutCard inputObject={inputObject} colorData={colorData}></DoughnutCard>);
                case 'table':
                    return (<TableCard inputObject={inputObject} colorData={colorData}></TableCard>)
                }
            })()
            }
        </div>
    )
}

export default DashboardCard;

