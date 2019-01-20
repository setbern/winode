import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux';
import ReactCodeInput from 'react-code-input';

import '../styles/Splash.css';

import Theme from '../constants/theme';

import TerminalText from './TerminalText';
import Title from './Title';
import Text from './Text';
import colors from '../constants/colors';
import AnimationWrapper from './AnimationWrapper';

import { togglePinOverlay, toggleHomePage, toggleDashboard } from '../redux/reducers/environment';

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
		<div className={'Side ' + props.side } style={{ width: '36vw' }}>
			{props.children}
		</div>
	)
}

const PinNumInput = (props) => {

}
const PinClickOverlay = (props) => {
	return (
		<div className='PinClickOverlay'>
			{props.children}
			
		</div>
	)
}
class Splash extends Component {
	handleChange = (item) => {
		console.log('handleChange', item);
		if (item.length == 6) {
			console.log('at end of length')
			this.props.togglePinOverlay(false);
			this.props.toggleHomePage(true);
		}
	}
	render() {
	    
	      return (  
	      		<ThemeProvider theme={Theme.light}>
	      			
			     	<div className="Splash">
			     		<AnimationWrapper
			     			in={this.props.pinOverlay}
			     			classNames='pin'
			     		>
			     			<PinClickOverlay>
			     				<ReactCodeInput 
			     					type='password' 
			     					fields={6} 
			     					onChange={this.handleChange}
			     				/>
			     			</PinClickOverlay>
			     		</AnimationWrapper>
			     		<Side side='left'>
			     			<Title mainTitle style={{ fontSize: '5rem', }}>WiNode</Title>
			     			<TerminalText mainTitle style={{ margin: '0.5rem' }}>Your Platform.</TerminalText>
			     			<TerminalText mainTitle style={{margin: '0.5rem' }}>Your Tools.</TerminalText>
			     			<TerminalText mainTitle style={{ margin: '0.5rem' }}>Your Money.</TerminalText>
			     			<Text style={{ fontSize: '1.25rem' }}>The way we use money is changing. As part of a new wave of financial ownership, you deserve a platform with the tools you need to succeed.</Text>
			     			<Text 
			     				title 
			     				customColor={colors.purple} 
			     				style={{marginTop: '60px', cursor: 'pointer' }}
			     				onClick={() => this.props.togglePinOverlay(true)}
			     			>
									Plug in your USB key and click here to begin.
			     			</Text>
			     		</Side>
			     		<Side side='right'>
			     			<WidgetMini
			     				title='Customizable Widgets'
			     			>
								 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<img style={{ height: '4vw', width: '30%', objectFit: 'contain' }}src="https://vignette.wikia.nocookie.net/central/images/1/10/Reddit.png/revision/latest?cb=20171025091848" />
									<img style={{ height: '4vw', width: '30%', objectFit: 'contain' }} src="https://www.coinbase.com/assets/mobile/store_listing_icon-ffbf3ec7c91090dd1f403464fad41560dac96ce04b7d86e7a459ea09c6522c18.png" />
									<img style={{ height: '3vw', width: '30%', objectFit: 'contain' }} src="https://www.samaritans.org/sites/default/files/branch/twitter_logo_bird_transparent_png.png" />
								 </div>
			     			</WidgetMini>
			     			<WidgetMini
			     				title='Explore Lightning Channels'
			     			>
								 	<div style={{ display: 'flex' }}>
										<img src="https://cdn-images-1.medium.com/max/1600/1*T2KX_IQRZDOy_OMzHMb11A.png" style={{ height: '12vw', width: '100%', objectFit: 'cover' }} />
									</div>
			     			</WidgetMini>
			     			<div className='minishit'>
			     				<WidgetMini 
			     					title='Node monitoring'
			     				>
										<TerminalTextSection>
											Pruning channel graph using block 007da346c156ccfca39b7dee6af5100974b0fa56732b0c2b1865 (height=1453184)
										</TerminalTextSection>
			     				</WidgetMini>
			     			</div>
			     		</Side>
			     	</div>
		     	</ThemeProvider>
	    );
	}
}




const mapStateToProps = ({ environment}) => {
   
    return {
    	pinOverlay: environment.pinOverlay
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    	togglePinOverlay: (status) => dispatch(togglePinOverlay(status)),
    	toggleHomePage: (status) => dispatch(toggleHomePage(status)),
    	toggleDashboard: (status) => dispatch(toggleDashboard(status)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Splash);