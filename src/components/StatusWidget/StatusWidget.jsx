import { connect } from 'react-redux';
import { get } from 'lodash';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { loadStatuses } from '../../redux/actions/status';
import Theme from '../../constants/theme';


import "../../styles/StatusWidget.css";

import TerminalText from '../TerminalText';
import Text from '../Text';

const StatusContainer = (props) => {
	return (
		<div className='StatusWidget'>
			{props.children}
		</div>
	)
}

const StatusIndicator = (props) => {
	return (
		<div className='StatusIndicator'>
			{props.children}
		</div>
	)
}


class StatusWidget extends Component {
	componentDidMount() {
		this.props.loadStatuses();
	}

	render() {
		const { blockHeight, peers, openChannels, warnings } = this.props;

		return (
			<ThemeProvider theme={Theme.light}>
				<StatusContainer>
					<StatusIndicator>
						<Text>Peers:</Text>
						<TerminalText>{peers}</TerminalText>
					</StatusIndicator>

					<StatusIndicator>
						<Text>Open Channels:</Text>
						<TerminalText>{openChannels}</TerminalText>
					</StatusIndicator>

					<StatusIndicator>
						<Text>Block Height:</Text>
						<TerminalText>{blockHeight}</TerminalText>
					</StatusIndicator>

					<StatusIndicator>
						<Text>Warnings:</Text>
						<TerminalText error>{warnings}</TerminalText>
					</StatusIndicator>
				</StatusContainer>
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