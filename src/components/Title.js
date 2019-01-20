import React from 'react'
import styled from 'styled-components'
import is from 'styled-is';

const Title = styled.p`
	font-family: Helvetica;
	transition: all ease .3s;
    margin: 0;
    margin-top: .6em;
    margin-bottom: .6em;
	color: ${props => props.theme.title};

	
	${is('subtitle') `
        font-size: 20px;
        
    `}
    ${is('reddit') `
        font-size: 14px;
        
    `}
	${is('mainTitle') `
        font-size: 48px;
        
    `}

`

export default Title