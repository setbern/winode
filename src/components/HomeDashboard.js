import { connect } from 'react-redux';
import React, { Component } from 'react';
import { get } from 'lodash';
import { ThemeProvider } from 'styled-components'
import Theme from '../constants/theme';

import '../styles/HomeDashBoard.css';

import { LOG_OUTPUT } from '../constants';
import { loadWalletBalance } from '../redux/actions/wallet';
import { loadStatuses } from '../redux/actions/status';

import Colors from '../constants/colors';
import Title from './Title';
import Text from './Text';
import TerminalText from './TerminalText';
import RedditWidget from './RedditWidget';
import DashboardCharts from './DashboardCharts';
import StatusWidget from './StatusWidget';


import { toggleDashboard } from '../redux/reducers/environment';



const DashBoardWrapper = (props) => {
	return (
		<div className='DashBoardWrapper'>
			{props.children}
		</div>
	)
}
const WidgetWrapper = (props) => {
	return (
		<div className='WidgetWrapper'>
			{
				props.title ?
					<div className='WidgetWrapperTitle' style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Title  subtitle style={{ display: 'inline-block' }}>{props.title}</Title>
						{!props.hideEdit ?
							<Text subtext style={{ color: `${Colors.royalBlue}`}}>Edit</Text> :
							null
						}
					</div>
				:
					null
			}
			{props.children}
		</div>
	)
}

const TerminalOutputWidgetHome = (props) => {

	function renderOutputLogs() {
		return LOG_OUTPUT.map((d,i) => {
			return <TerminalText terminal key={'ter-text-' + i}>{d}</TerminalText>
		})
	}
	return (
		<div className='TerminalOutputWidgetHome'>
			<div className='con'>
				{
					renderOutputLogs()
				}
			</div>
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
const SplitWidgetRow = (props) => {
	console.log('SplitWidgetRow', props)
	console.log(props.className ? props.className : 'fackshit')
	return (
		<div className={'SplitWidgetRow ' + (props.className ? props.className : '')}>
			{props.children}
		</div>
	)
}

const TerminalWidget = (props) => {
	return (
		<div className='TerminalWidget'>
			<TerminalText bold>WiNode</TerminalText>
		</div>
	)
}

const ActivityWidget = (props) => {
	function renderActivityWidget() {

	}
	return (
		<div className='ActivityWidget'>

		</div>
	)
}
class HomeDashboard extends Component {
	componentDidMount() {
		this.props.loadStatuses();
		this.props.loadBalance();
	}

	render() {
		const { balance, openChannels } = this.props;
	    
	      return (  
	      		<ThemeProvider theme={Theme.light}>
			     	<div className='HomeDashboard'>
			     		
			     		<DashBoardWrapper>
			     			<WidgetWrapper
			     				title={'Node Console'}
			     			>
			     				<TerminalOutputWidgetHome />
			     			</WidgetWrapper>
			     			<SplitWidgetColumn>
			     				<WidgetWrapper
			     					title={'Price Chart'}
			     				>
			     					<DashboardCharts />
			     				</WidgetWrapper>
			     				<SplitWidgetRow>
			     					<WidgetWrapper title="Lightning">
										 	<div 
										 		onClick={() => this.props.toggleDashboard(false)}
										 		style={{ fontSize: '1.25rem', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
												<Text style={{ margin: '0.5rem' }}>Balance: {balance}</Text>
												<Text style={{ margin: '0.5rem' }}><Text customColor={Colors.purple}>{openChannels} </Text> open channels</Text>
											</div>
											 {/* <div style={{ height: '100%', width: '100%', backgroundColor: `${Colors.purple}`, color: `${Colors.white}`, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem' }}>
											 	Lightning
											</div> */}
			     					</WidgetWrapper>
			     					<WidgetWrapper>
											<div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
												<Text style={{ fontSize: '4rem', color: `${Colors.lightBlue}` }}>+</Text>
											</div>
			     					</WidgetWrapper>
			     				</SplitWidgetRow>
			     			</SplitWidgetColumn>
			     			<WidgetWrapper
			     				title={'Reddit Stream'}
			     			>
			     				<RedditWidget />
			     			</WidgetWrapper>
			     			{
			     				<SplitWidgetColumn
			     					className='statsWrapperr'
			     				>
				     				<WidgetWrapper
				     					title={'Stats'}
				     				>
				     					<StatusWidget />
				     				</WidgetWrapper>
				     				<WidgetWrapper

				     				>
										<div className='vert'/>
										<div className='hor'/>
										
				     				</WidgetWrapper>
				     			</SplitWidgetColumn>
			     			}
			     			
			     			
			     		</DashBoardWrapper>
			     	</div>
		     	</ThemeProvider>
	    );
	}
}

function mapStateToProps(state) {
	return {
		balance: get(state, 'wallet.balance'),
		openChannels: get(state, 'status.openChannels'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadStatuses() {
			dispatch(loadStatuses());
		},
		loadBalance() {
			dispatch(loadWalletBalance());
		},
		toggleDashboard: (status) => dispatch(toggleDashboard(status)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeDashboard);