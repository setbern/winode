import { connect } from 'react-redux';
import { get } from 'lodash';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { sendMoney } from '../../redux/actions/transactions';
import Theme from '../../constants/theme';
import colors from '../../constants/colors';
import Text from '../Text';

const InputText = styled.input`
	background-color: ${colors.black}
	font-family: PT Mono;
	color: ${colors.green};
	width: 450px;
	height: 50px;
	padding-left: 12px;
	border: none;
	marign: 8px;

	::placeholder {
 	 	color: ${colors.green};
  		
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: white;
`;
const AddressField = styled(InputText)`
	
	
`;
const PadddingText = styled(Text)`
	padding-left: 12px;
`
const Row = styled.div`
	display: flex;
`;
const AmountField = styled(InputText)`
	background-color: ${colors.black}
`;
const SendButton = styled.button`
	margin-top: 16px;
	width: 120px;
	height: 40px;
	border: none;
	background-color: ${colors.purple};
	color: white;
	margin-bottom: 12px;
	margin-left: 8px;
	transition: all ease .3s;
	:hover{
		box-shadow: 0 6px 12px 0 rgba(0,0,0,0.20), 0 1px 4px 0 rgba(0,0,0,0.30);
	}
	:active{
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20), 0 1px 3px 0 rgba(0,0,0,0.30);
	}
`;

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

		this.setState({
			amount: 0,
			address: '',
		});
	}

	render() {
		const { isFetching } = this.props;
		const { transactionAmount, address } = this.state;

		return (
			<ThemeProvider theme={Theme}>
				<Container>
					<PadddingText>Address to send funds to</PadddingText>
					<AddressField 
						value={address} 
						onChange={this.handleAddressChange} 
						placeholder="Address"
					/>
					<PadddingText>Amount to send</PadddingText>


					<AmountField value={transactionAmount} onChange={this.handleAmountChange} />

					<SendButton onClick={this.handleSendClick} disabled={!!isFetching}>
						{isFetching ? 'Sending...' : 'Send'}
					</SendButton>
				</Container>
			</ThemeProvider>
		);
	}
}

function mapStateToProps(state) {
	return {
		isFetching: get(state, 'transaction.isFetching'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onSend({ amount, address }) {
			dispatch(sendMoney({ amount, address }));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionWidget);