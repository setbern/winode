import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import Theme from '../constants/theme'

import '../styles/Navigation.css';

import Title from './Title';


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
			<Title subtitle >WiNode</Title>
		</div>
	)
}

export default  Navigation