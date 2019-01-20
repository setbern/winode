import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { sendMoney } from '../../redux/actions/transactions';
import Theme from '../../constants/theme';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
const AddressField = styled.input``;
const Row = styled.div`
	display: flex;
`;
const AmountField = styled.input``;
const SendButton = styled.button``;

class TransactionWidget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			address: '',
			transactionAmount: 0,
		};
	}

	handleAmountChange = e => {
		this.setState({
			transactionAmount: +e.target.value,
		});
	}

	handleAddressChange = e => {
		this.setState({
			address: e.target.value,
		});
	}

	handleSendClick = () => {
		const { onSend } = this.props;
		const { transactionAmount, address } = this.state;

		onSend({
			amount: transactionAmount,
			address,
		});
	}

	render() {
		const { transactionAmount, address } = this.state;

		return (
			<ThemeProvider theme={Theme}>
				<Container>
					<AddressField value={address} onChange={this.handleAddressChange} />

					<Row>
						<AmountField value={transactionAmount} onChange={this.handleAmountChange} />

						<SendButton onClick={this.handleSendClick}>
							Send
						</SendButton>
					</Row>
				</Container>
			</ThemeProvider>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		onSend({ amount, address }) {
			dispatch(sendMoney({ amount, address }));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionWidget);