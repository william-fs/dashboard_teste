import React, { Component } from "react";
import Chart from "react-apexcharts";

interface ChartsProps {
    seriesM: number[][];
    yaxixConf: any;
    // seriesM: { data: number[] }[];
    // categories: (string | string[])[];
}

interface ChartsState {
    seriesM: { data: number[] }[];
    options: any;
    yaxixConf: any;
}

class Charts extends Component<ChartsProps, ChartsState>  {
    
constructor(props: ChartsProps) {
    super(props);

    this.state = {
            series: [{
                data: props.seriesM
            }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                columnWidth: '45%',
                distributed: true,
            }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                // obs categories array de arrays 
                categories: props.categories,
                labels: {
                style: {
                    fontSize: '12px'
                }
                }
            },
            yaxis: {
                labels: props.yaxixConf,
            }
            },
        
        
        };
    }

render() {
    return (
        <div className="Charts">
            <div className="row">
            <div className="mixed-chart">
                <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
                />
            </div>
            </div>
        </div>
        );
    }
}

export default Charts;