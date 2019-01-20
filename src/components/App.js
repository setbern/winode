import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';

import Splash from './Splash';
import HomeDashboard from './HomeDashboard';
import Navigation from './Navigation';
import AnimationWrapper from './AnimationWrapper';
import LightningPage from '../pages/LightningPage';

import { togglePinOverlay, toggleHomePage, toggleDashboard } from '../redux/reducers/environment';

const OtherDashBoardThing = () => {
	return(
		<div className='OtherDashBoardThing'>
			<svg width="140px" height="136px" viewBox="0 0 140 136" version="1.1" xmlns="http://www.w3.org/2000/svg" >
			    <g id="UX" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <g id="Home-Dashboard" transform="translate(-995.000000, -495.000000)" fill="#00D1B2">
			            <polygon id="Rectangle" points="1065 563 1135 495 1135 631 995 631"></polygon>
			        </g>
			    </g>
			</svg>
		</div>
	)
}
const DashBoardThing = () => {
	return (
		<div className='DashBoardThing'>
			<svg width="177px" height="116px" viewBox="0 0 177 116" version="1.1" xmlns="http://www.w3.org/2000/svg" >
			    <g id="UX" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <g id="Home-Dashboard" transform="translate(0.000000, -65.000000)" fill="#00D1B2">
			            <polygon id="Rectangle" points="0 65 177 65 88.5 123 0 181"></polygon>
			        </g>
			    </g>
			</svg>
		</div>
	)
}

class App extends Component {

	
    render() {
    
      return (  
	     	<div className="App">
	     		<AnimationWrapper
	     			in={!this.props.home}
	     			classNames='page'
	     			appear={true}
	     			timeout={{
	     				enter: 1000,
	     				exit: 800
	     			}}
	     		>
	     			<Splash />
	     		</AnimationWrapper>
	     		<AnimationWrapper
	     			in={this.props.home}
	     			classNames='page'
	     			timeout={{
	     				enter: 1500,
	     				exit: 800
	     			}}
	     		>
		     		<Navigation />	
		     	</AnimationWrapper>
	     		<AnimationWrapper
	     			in={this.props.home}
	     			classNames='page'
	     			timeout={{
	     				enter: 1500,
	     				exit: 800
	     			}}
	     		>
		     		<DashBoardThing /> 	
	     		</AnimationWrapper>

	     		<AnimationWrapper
	     			in={this.props.home}
	     			classNames='page'
	     			timeout={{
	     				enter: 1500,
	     				exit: 800
	     			}}
	     		>
	     			
				    <OtherDashBoardThing />
	     		</AnimationWrapper>

	     		<AnimationWrapper
	     			in={ this.props.home && this.props.dashboard}
	     			classNames='page'
	     			timeout={{
	     				enter: 1500,
	     				exit: 800
	     			}}
	     		>
	     			<HomeDashboard />
	     		</AnimationWrapper>

	     		<AnimationWrapper
	     			in={this.props.home && !this.props.dashboard}
	     			classNames='page'
	     			timeout={{
	     				enter: 1500,
	     				exit: 800
	     			}}
	     		>
	     			<LightningPage />
	     		</AnimationWrapper>
	     	</div>
    	);
  	}
}


const mapStateToProps = ({ environment}) => {
   
    return {
    	...environment
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    	toggleHomePage: (status) => dispatch(toggleHomePage(status))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);