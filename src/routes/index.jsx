import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FirstChart, SecondChart } from '../components';

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route exect path="/1" component={FirstChart}/>
				<Route exect path="/2" component={SecondChart}/>
				<Route path="*" render={() => <Redirect to="/1"/>}/>
			</Switch>
		</div>
	)
};

export default Routes;
