import React from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighcharts.src';
import config from '../configs/second';


const SecondChart = () => {

	return (
		<div>
			<ReactHighcharts config={config}/>
		</div>
	)
};

export default SecondChart;
