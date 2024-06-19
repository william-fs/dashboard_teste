import "./Chart3Campos.css";

import React, { Component } from "react";
import Chart from "react-apexcharts";

interface ChartsProps {
    series: { name:string, data: number[] }[];
    categories: (string | string[])[];
}

interface ChartsState {
    series: { name:string, data: number[] }[];
    options: any;
}

class Charts3Campos extends Component<ChartsProps, ChartsState> {
    
    constructor(props) {
        super(props);

        this.state = {
        
        series: props.series,
        
        options: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
            show: false
            },
            zoom: {
            enabled: false
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
            }
        }],
        plotOptions: {
            bar: {
            horizontal: false,
            // borderRadius: 10,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
            dataLabels: {
                total: {
                enabled: false,
                style: {
                    fontSize: '13px',
                    fontWeight: 900,
                }
                }
            }
            },
        },
        xaxis: {
            // type: 'datetime',
            categories: props.categories,
        },
        yaxis: {
            labels: {
            formatter: function (value: number) {
            return `R$ ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
            }
        }},
        legend: {
            show: true,
            position: 'bottom',
            height: 50,
            
        },
        fill: {
            opacity: 1
        }
        },
    };
    }

    render() {
    return (
    <div id="chart3">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={350} width={800} />
    </div>
    );
    }
}

export default Charts3Campos;