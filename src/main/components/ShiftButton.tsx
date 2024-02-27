import React, { useState } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { shift } from './../hooks/utilities.tsx'
import theme from '../theme.ts'

const ShiftButton = () => {
    const [degree, setDegree] = useState<number>(0)

    const Button = styled.div`
	// flex: 1;
	flex-direction: 'row';
	height: 200;
	background-color: ${theme.colorPallet.salmon};
	filter: hue-rotate(${degree}deg);
`

    const hueShift = () => {
		console.log('test')
		let rotate = degree
		if (rotate !== 315){rotate = rotate + 45}
			else {rotate = 0}
			console.log(rotate)
		setDegree(rotate)
	}
    
    return (
        <Button onClick={() => hueShift()}>Hi</Button>
    )
}

export default ShiftButton