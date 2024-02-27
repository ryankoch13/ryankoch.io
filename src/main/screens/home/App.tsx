import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../../hooks/window.tsx'

import styled, { css, ThemeProvider } from 'styled-components'
import Typed from 'typed.js'

import curls from '../../assets/curls.png'
import theme from '../../theme.ts'
import styles from './styles.ts'
import TypedComponent from '../../components/Typed.tsx'
import { ReactTyped, ReactTypedProps } from 'react-typed'
import { shift } from './../../hooks/utilities.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import ShiftButton from '../../components/ShiftButton.tsx'
import Canvas from './Canvas.tsx'



// class Canvas extends React.Component {
// 	constructor(props) {
// 		super(props)
		
		
// 		// const colorPickerRef = React.createRef()

		
// 	}

const App = () => {
	const [rotate, setRotate] = useState(0)

	const AppWrapper = styled.div`
	// display: flex;
	// flex-direction: 'column';
	// width: '100%';
`

const LandingWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justifyContent: space-between;
`

const Landing = styled.div`
		// display: 'flex';
	// flex-direction: 'column';
	// justify-content: 'space-between';
	background-color: ${theme.colorPallet.black};
	// background-image: './../../assets/curls.png';
	// background-repeat: repeat;
`

const white = css`
	color: white;
	/* font-size: 58; */
`

const Heading = styled.h1`
	${white}
	font-size: 24px;
	min-height: 48px;
`

const Row = styled.div`
	background-color: 'black';
	flex: 1;
	flex-direction: 'row';
	height: '800px';
`


	const button = useRef(null)
	const typedProps: ReactTypedProps = {
		strings: [
			'I am passionate about... presence',
			'I am passionate about... coding',
			'I love... live music',
			'I enjoy... problem solving',
			'I escape with... weightlifting',
			'I seek... consciousness',
			'I would love... to meet you',
		],
		typeSpeed: 50,
		backSpeed: 60,
		loop: true,
		// style: {
		// 	height: 200,
		// },
		// attr: 'I'
		// ref: button
	}


	const canvasRef = useRef<HTMLCanvasElement>(null)

	
	const { height, width } = useWindowDimensions()
	const canvas = canvasRef.current
	const context = canvas?.getContext('2d')

	const drawStuff = () => {
		const renderCircles = () => {
		const colors = ['white', '#E4E4E4', '#616161']
		if (canvas && context) {
		canvas.style.width = '100%'
		canvas.style.height = '60%'
			
		const dotColor = Math.floor(Math.random() * 3)

		var centerX = Math.floor(Math.random() * width);
		var centerY = 80 + Math.floor(Math.random() * height);
		var radius = Math.floor(Math.random() * 120);
		//  Defines what happens when they overlap
		context.globalAlpha = 1
		context.globalCompositeOperation = "difference";
		context.beginPath();
		
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.fillStyle = colors[dotColor];
		context.fill();
			}
		
		}

	
				context?.clearRect(0, 0, width, height)
				let i : number
				
				for (i = -2; i < (width / 60); i++) {
				
				renderCircles();
			}
		}

	useEffect(() => {
		drawStuff()
	}, [canvasRef])
	


	return (
		<ThemeProvider theme={theme}>
			<AppWrapper>
				<Landing>
					<Row>
						<Heading>Testy Test here</Heading>
					</Row>
					<Row>
						<Heading>
							Welcome to my personal site -- please enjoy this sample of my
							design philosphy and code :]
						</Heading>
					</Row>
					<Row>
						<ReactTyped {...typedProps}>
							<Heading><FontAwesomeIcon icon="newspaper"/></Heading>
						</ReactTyped>
					</Row>
				</Landing>
				{/* <Button onClick={() => hueShift()}>Hi</Button>
				 */}
				 <ShiftButton />
			</AppWrapper>
			
			{/* <div id='canvasWrapper'>
				<canvas ref={canvasRef} style={styles.canvas} height={height + 'px'} width={width + 'px'} id='myCanvas' onClick={() => drawStuff()} />
			</div> */}
			<Canvas />
		</ThemeProvider>
	)
}

export default App
