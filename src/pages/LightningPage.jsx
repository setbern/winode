import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import ChannelGraphWidget from '../components/ChannelGraphWidget';
import TransactionWidget from '../components/TransactionWidget';
import BalanceWidget from '../components/BalanceWidget';
import PeerListWidget from '../components/PeerListWidget';
import WalletTerminalWidget from '../components/WalletTerminalWidget';
import Theme from '../constants/theme';
import Title from '../components/Title';
import TerminalText from '../components/TerminalText';


import '../styles/LightningPage.css';



const DashBoardWrapper = (props) => {
	return (
		<div className='DashBoardWrapper'>
			{props.children}
		</div>
	)
}


const WidgetWrapper = (props) => {
	return (
		<div className={'WidgetWrapper ' + (props.className ? props.className : '')}>
			{
				props.title ?
					<div className='WidgetWrapperTitle'>
						<Title  subtitle>{props.title}</Title>
					</div>
				:
					null
			}
			{props.children}
		</div>
	)
}

const TerminalOutputWidget = (props) => {

	
	return (
		<div className='TerminalOutputWidget'>
			<div className='con'>
				{props.children}
			</div>
		</div>
	)
}

const TerminalWidget = (props) => {
	return (
		<div className='TerminalWidget'>
			<TerminalText bold>WiNode:</TerminalText>
		</div>
	)
}

const SplitWidgetColumn = (props) => {
	return (
		<div className={'SplitWidgetColumn ' +  (props.className ? props.className : '') }>
			{props.children}
		</div>
	)
}

export default class LightningPage extends Component {
	render() {
		return (
			<ThemeProvider theme={Theme.light}>
				<div className='LightningPage'>
					<DashBoardWrapper>
						<SplitWidgetColumn>
							<WidgetWrapper
								title='Send'
							>
								<TransactionWidget />
							</WidgetWrapper>
							<WidgetWrapper
								title='Balance'
							>
								<BalanceWidget />
							</WidgetWrapper>
						</SplitWidgetColumn>
						<WidgetWrapper
							title='Terminal'
							className='terr'
						>
							<TerminalOutputWidget>
								<TerminalWidget />
							</TerminalOutputWidget>
						</WidgetWrapper>
					</DashBoardWrapper>
					{
						// <TransactionWidget />
						// <BalanceWidget />
						// <PeerListWidget />
						// <ChannelGraphWidget />
						// <WalletTerminalWidget />
					}
					
				</div>
			</ThemeProvider>
		);
	}
}