import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';

import Splash from './Splash';
import HomeDashboard from './HomeDashboard';
import Navigation from './Navigation';
import AnimationWrapper from './AnimationWrapper';

import { togglePinOverlay, toggleHomePage, toggleDashboard } from '../redux/reducers/environment';

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
	     				exit: 500
	     			}}
	     		>
	     			<Splash />
	     		</AnimationWrapper>
	     		<AnimationWrapper
	     			in={this.props.home}
	     			classNames='page'
	     			timeout={{
	     				enter: 1500,
	     				exit: 500
	     			}}
	     		>
	     			<Navigation />
	     		</AnimationWrapper>
	     		<AnimationWrapper
	     			in={ this.props.home && this.props.dashboard}
	     			classNames='page'
	     			timeout={{
	     				enter: 1500,
	     				exit: 500
	     			}}
	     		>
	     			<HomeDashboard />
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