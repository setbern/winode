import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Theme from '../../constants/theme';

const Container = styled.div``;

class BalanceWidget extends Component {
	componentDidMount() {
		const { loadBalance } = this.props;
		loadBalance();
	}

	render() {
		const { balance } = this.props;

		<ThemeProvider theme={Theme}>
			<Container>
				Balance: {balance} satoshi
			</Container>
		</ThemeProvider>
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