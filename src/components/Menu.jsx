import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class ChartsMenu extends React.Component {
	state = {};

	handleItemClick = (e, {name}) => this.setState({activeItem: name});

	render() {
		const {activeItem} = this.state;

		return (
			<Menu>
				<Link to='/1'>
					<Menu.Item
						name='first_chart'
						active={activeItem === 'first_chart'}
						onClick={this.handleItemClick}
					>
						First chart
					</Menu.Item>
				</Link>
				<Link to='/2'>
					<Menu.Item
						name='second_chart'
						active={activeItem === 'second_chart'}
						onClick={this.handleItemClick}
					>
						Second chart
					</Menu.Item>
				</Link>

			</Menu>
		)
	}
}

export default ChartsMenu;