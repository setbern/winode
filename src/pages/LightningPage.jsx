import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import ChannelGraphWidget from '../components/ChannelGraphWidget';
import TransactionWidget from '../components/TransactionWidget';
import BalanceWidget from '../components/BalanceWidget';
import PeerListWidget from '../components/PeerListWidget';
import WalletTerminalWidget from '../components/WalletTerminalWidget';
import Theme from '../constants/theme';

const Container = styled.div``;
const Row = styled.div`
	display: flex;
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
`;
const Left = styled.div``;
const Right = styled.div``;

export default class LightningPage extends Component {
	render() {
		return (
			<ThemeProvider theme={Theme.light}>
				<Container>
					<Row>
						<Left>
							<Column>
								<Row>
									<TransactionWidget />
									<BalanceWidget />
									<PeerListWidget />
								</Row>

								<ChannelGraphWidget />
							</Column>
						</Left>

						<Right>
							<WalletTerminalWidget />
						</Right>
					</Row>
				</Container>
			</ThemeProvider>
		);
	}
}