import React from 'react'
import styled from 'styled-components'
import is from 'styled-is';

const Title = styled.p`
	font-family: Helvetica;
	transition: all ease .3s;

	color: ${props => props.theme.title};

	${is('mainTitle') `
        font-size: 48px;
        
    `}

`

export default Title