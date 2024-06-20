import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import "./Chart3Campos.css"

interface Charts3CamposProps {
    series: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
}

interface Charts3CamposState {}

class Charts3Campos extends Component<Charts3CamposProps, Charts3CamposState> {
    constructor(props: Charts3CamposProps) {
        super(props);
    }

    render() {
        return (
        <div>
            <div id="chart3">
            <Chart options={this.props.options} series={this.props.series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
        );
    }
}

export default Charts3Campos;