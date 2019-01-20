import React from 'react'
import styled from 'styled-components'
import is from 'styled-is';

import colors from '../constants/colors';

const TerminalText = styled.p`
	font-family: PT Mono;
	transition: all ease .3s;

	color: ${colors.green};


	${is('mainTitle') `
        font-size: 48px;
        
    `}
   	${is('terminal') `
        font-size: 14px;
            
    `}

    ${is('bold') `
        font-weight: 700;
        
    `}
    ${is('error') `
        color: ${colors.red};
        
    `}
`

export default TerminalText