import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const chartValuesArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxChartValue = Math.max(...chartValuesArray);

    return (
        <div className='chart'>
            {
                props.dataPoints.map((dataPoint) => {
                    return (
                            <ChartBar 
                                key={dataPoint.label}
                                value={dataPoint.value} 
                                maxValue={maxChartValue} 
                                label={dataPoint.label} 
                            />
                        )
                })
            }
        </div>
    )
}
export default Chart;