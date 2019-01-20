import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import Theme from '../constants/theme';

import '../styles/HomeDashBoard.css';

import Title from './Title';

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
const NavThing = () => {
	return (
		<div className='NavThing'>
			<svg width="284px" height="65px" viewBox="0 0 284 65" version="1.1" xmlns="http://www.w3.org/2000/svg">
				    <g id="UX" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				        <g id="Home-Dashboard" fill="#00D1B2">
				            <g id="Nav">
				                <polygon id="Rectangle" points="1.13686838e-13 -1.42108547e-14 283.289203 -1.42108547e-14 178 65 1.13686838e-13 65"></polygon>
				            </g>
				        </g>
				    </g>
			</svg>
		</div>
	)
}

const Navigation = (props) => {
	return (
		<div class='Navigation'>
			<NavThing />
			<Title>WiNode</Title>
		</div>
	)
}

export default class HomeDashboard extends Component {
	render() {
	    
	      return (  
	      		<ThemeProvider theme={Theme.light}>
			     	<div className='HomeDashboard'>
			     		<Navigation />
			     		<DashBoardThing />
			     		<OtherDashBoardThing />
			     	</div>
		     	</ThemeProvider>
	    );
	}
}