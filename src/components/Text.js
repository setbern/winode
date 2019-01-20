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

`

export default Text