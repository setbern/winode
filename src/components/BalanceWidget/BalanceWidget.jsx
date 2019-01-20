import { connect } from 'react-redux';
import { get } from 'lodash';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { loadWalletBalance } from '../../redux/actions/wallet';
import Theme from '../../constants/theme';

import Text from '../Text';
import TerminalText from '../TerminalText';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding-left: 12px;
	background-color: white;
`;

const MarignText = styled(Text) `
	margin-left: 12px;
`
class BalanceWidget extends Component {
	componentDidMount() {
		const { loadBalance } = this.props;
		loadBalance();
	}

	render() {
		const { balance } = this.props;

		return (
			<ThemeProvider theme={Theme}>
				<Container>
					<TerminalText>{balance}</TerminalText>
					<MarignText>satoshi</MarignText>
				</Container>
			</ThemeProvider>
		);
	}
}

function mapStateToProps(state) {
	return {
		balance: get(state, 'wallet.balance'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadBalance() {
			dispatch(loadWalletBalance());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BalanceWidget);