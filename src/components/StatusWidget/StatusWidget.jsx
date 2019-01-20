import { connect } from 'react-redux';
import { get } from 'lodash';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { loadStatuses } from '../../redux/actions/status';
import Theme from '../../constants/theme';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
const StatusIndicator = styled.div``;

class StatusWidget extends Component {
	componentDidMount() {
		this.props.loadStatuses();
	}

	render() {
		const { blockHeight, peers, openChannels, warnings } = this.props;

		return (
			<ThemeProvider theme={Theme.light}>
				<Container>
					<StatusIndicator>
						{peers}
					</StatusIndicator>

					<StatusIndicator>
						{openChannels}
					</StatusIndicator>

					<StatusIndicator>
						{blockHeight}
					</StatusIndicator>

					<StatusIndicator>
						{warnings}
					</StatusIndicator>
				</Container>
			</ThemeProvider>
		);
	}
}

function mapStateToProps(state) {
	return {
		peers: get(state, 'status.peers') || 0,
		openChannels: get(state, 'status.openChannels') || 0,
		blockHeight: get(state, 'status.blockHeight') || 0,
		warnings: get(state, 'status.warnings') || 0,
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