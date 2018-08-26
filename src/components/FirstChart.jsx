import React from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighcharts.src';
import config from '../configs/first';

const FirstChart = () => {
	return (
		<div >
			<ReactHighcharts config={config} />
		</div>
	)
};


export default FirstChart;
