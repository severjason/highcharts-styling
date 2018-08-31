import React from 'react';
import FirstChartStyles from './FirstChartStyles';
//import ReactHighcharts from 'react-highcharts/ReactHighcharts.src';
//import config from '../configs/first';

const FirstChart = () => {
	return (
		<FirstChartStyles >
			<div className="container">
				<div className="line"/>
				<div className="photo">
					Photo
				</div>
			</div>
			{/*<ReactHighcharts config={config} />*/}
		</FirstChartStyles>
	)
};


export default FirstChart;
