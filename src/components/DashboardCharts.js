import { connect } from 'react-redux';
import { get } from 'lodash';
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import '../styles/DashboardCharts.css';

import { fetchCoinData } from '../redux/reducers/chart';

import { createChartData, createChartOptions } from '../scripts';

import colors from '../constants/colors';


const Chart = (props) => {
	console.log('chart -> props', props)
	return (
		<div className='Chart'>
		    <Line 
		        data={props.data} 
		        options={props.options}
		    />
		</div>
	)
}
class DashboardCharts extends Component {
	componentDidMount() {
		this.props.fetchCoinData(1)
	}

	renderChartData = () => {
	    const {
	        metricType,
	        dateRange
	    } = this.props;


	    const chartModel = {
	        startRange: dateRange[0].format('x'),
	        endRange: dateRange[1].format('x'),
	        rangeDiff: dateRange[1].diff(dateRange[0], 'days'),
	        chartData: this.props.price,
	        metricType: metricType
	    };


	    let chartModelData = createChartData(chartModel);

	    let data = {
	        labels: chartModelData.xValue,
	        datasets: [
	            {
	                fill: false,
	                lineTension: 0,
	                backgroundColor: colors.purple,
	                borderColor: colors.purple,
	              	
	                data: chartModelData.yValue
	            }
	        ]
	    };
	
		console.log('DashboardCharts -> data', data)	    
	    return data
	}
	renderChartOptions = () => {

	    const params = {
	        metricTypeId: this.props.metricType.id,
	        legendColor: '#F97137',
	    }
	    
	    const options = createChartOptions(params)

	    return options;
	}
	render() {
		console.log('DashboardCharts -> this.props', this.props)
		return (
	   		<div className='DashboardCharts'>
	   			{ 
	   			    this.props.price.length > 0 ?
	   			        <Chart 
	   			            data={this.renderChartData()} 
	   			            options={this.renderChartOptions()}
	   			        />
	   			        
	   			    :
	   			        null
	   			}
	     	</div>
	  	);
	}
}

const mapStateToProps = ({ chart}) => {
   
    return {
    	price: chart.price,
    	metricType: chart.metricType,
    	dateRange: chart.dateRange,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    	fetchCoinData: (id) => dispatch(fetchCoinData(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCharts);