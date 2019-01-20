import React from 'react'
import styled from 'styled-components'
import is from 'styled-is';

const Text = styled.p`
	font-family: Helvetica-Light;
	transition: all ease .3s;

	color: ${props => props.theme.title};

	${is('customColor') `
        color: ${props => props.customColor}
        
    `}

    ${is('title')`
    	font-size: 18px;
    `}

    ${is('subtext')`
    	font-size: 11px;
    `}
    ${is('reddit')`
    	font-size: 9px;
    `}

`

export default Text