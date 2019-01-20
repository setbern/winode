import { connect } from 'react-redux';
import { get } from 'lodash';
import React, { Component } from 'react';

import { loadStatuses } from '../../redux/actions/status';

class StatusWidget extends Component {
	render() {
		const { state } = this.props;

		return (
			<div>
				I am the status widget
				{JSON.stringify(state)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		peers: get(state, 'status.peers') || 0,
		openChannels: get(state, 'status.openChannels') || 0,
		blockHeight: get(state, 'status.blockHeight') || 0,
		warnings: get(state, 'status.warnings') || 0,
		state,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadStatuses() {
			dispatch(loadStatuses());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusWidget);