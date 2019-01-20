import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

import '../styles/Splash.css';

import Theme from '../constants/theme';

import TerminalText from './TerminalText';
import Title from './Title';
import Text from './Text';
import colors from '../constants/colors';

const TerminalTextSection = (props) => {
	return (
		<div className='TerminalTextSection'>
			<TerminalText bold>WiNode:</TerminalText>
			<TerminalText>{props.children}</TerminalText>
		</div>
	)
}
const WidgetMini = (props) => {
	return (
		<div className='WidgetMini'>
			<Title subtitle>{props.title}</Title>
			{props.children}
		</div>
	)
}
const Side = (props) => {
	return (
		<div className={'Side ' + props.side }>
			{props.children}
		</div>
	)
}
export default class Splash extends Component {
	render() {
	    
	      return (  
	      		<ThemeProvider theme={Theme.light}>
			     	<div className="Splash">
			     		<Side side='left'>
			     			<Title mainTitle >WiNode</Title>
			     			<TerminalText mainTitle >Platform Terminal for your needs</TerminalText>
			     			<Text>Lorem Khaled Ipsum is a major key to success. Look at the sunset, life is amazing, life is beautiful, life is what you make it. In life there will be road blocks but we will over come it. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. The key to more success is to get a massage once a week, very important, major key,</Text>
			     			<Text title customColor={colors.purple} style={{marginTop: '60px'}}>Please Plug in your key to get started</Text>
			     		</Side>
			     		<Side side='right'>
			     			<WidgetMini
			     				title='Send Amount to wallet'
			     			>
			     				<TerminalTextSection>1FfmbHfnpaZjKFvyi1okTjJJusN455paPH</TerminalTextSection>
			     			</WidgetMini>
			     			<WidgetMini
			     				title='Send Amount to wallet'
			     			>
			     				<TerminalTextSection>1FfmbHfnpaZjKFvyi1okTjJJusN455paPH</TerminalTextSection>
			     			</WidgetMini>
			     			<div className='minishit'>
			     				<WidgetMini
			     					title='Send Amount to wallet'
			     				>
			     				</WidgetMini>
			     				<WidgetMini
			     					title='Send Amount to wallet'
			     				>
			     				</WidgetMini>
			     			</div>
			     		</Side>
			     	</div>
		     	</ThemeProvider>
	    );
	}
}