import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../../hooks/window.tsx'

import styled, { css, ThemeProvider } from 'styled-components'
import Typed from 'typed.js'

import curls from '../../assets/curls.png'
import theme from '../../theme.ts'
import styles from './styles.ts'
import TypedComponent from '../../components/Typed.tsx'



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
		display: 'flex';
	flex-direction: 'column';
	justify-content: 'space-between';
	background-color: ${theme.colorPallet.black};
	background-image: './../../assets/curls.png';
	// background-repeat: repeat;
`

const white = css`
	color: white;
	/* font-size: 58; */
`

const Heading = styled.h1`
	${white}
	font-size: 24;
`

const Row = styled.div`
	flex: 1;
	flex-direction: 'row';
`

const Test = styled.div`
	// flex: 1;
	height: 400;
`

const Button = styled.div`
	// flex: 1;
	flex-direction: 'row';
	height: 200;
	background-color: ${theme.colorPallet.salmon};
	filter: hue-rotate(${rotate}deg);
`


	const button = useRef(null)
	// useEffect(() => {
	// 	const typed = new Typed(button.current, {
			// strings: [
			// 	'I am passionate about... presence',
			// 	'I am passionate about... coding',
			// 	'I love... live music',
			// 	'I enjoy... problem solving',
			// 	'I escape with... weightlifting',
			// 	'I seek... consciousness <i class="fas fa-om"></i>',
			// 	'I would love... to meet you',
			// ], //My sentences
	// 		typeSpeed: 50, //How fast it types (higher = slower)
	// 		backSpeed: 60, //How fast it backspaces (higher = slower)
	// 		startDelay: 100,
	// 		loop: true,
	// 		showCursor: false,
	// 	})
	// 	return () => {
	// 		typed.destroy()
	// 	}
	// }, [])

	const typedProps = {
		strings: [
			'I am passionate about... presence',
			'I am passionate about... coding',
			'I love... live music',
			'I enjoy... problem solving',
			'I escape with... weightlifting',
			'I seek... consciousness <i class="fas fa-om"></i>',
			'I would love... to meet you',
		],
		ref: button
	}

	useEffect(() => {
		const typed = TypedComponent(typedProps)
		return () => {
			typed?.destroy()
		}
	}, [])

	

	const ShiftButton = ({onClick}) => (
		<Button onClick={onClick} />
	)
	// {
	// 	const ref = useRef(null)
	// 	return (
	// 	<Button ref={ref} onClick={onClick} />
	// )}

	

	// export function Canvas() {
		
	// }

	

	const hueShift = () => {
		if (rotate !== 315){setRotate(rotate + 45)}
			else {setRotate(0)}
			console.log(rotate)
	}

	const canvasRef = useRef<HTMLCanvasElement>(null)

	
	const { height, width } = useWindowDimensions()
	const canvas = canvasRef.current
	const context = canvas?.getContext('2d')

	console.log(height, width)

	function setCanvasScalingFactor() {
		return window.devicePixelRatio || 1;
	 }

	//  context.clearRect(0, 0, width, height)

	function drawStuff() {
		// var pixelRatio = setCanvasScalingFactor();
		// Had to play with the math to get the sizing and spacing right

		

		

		const renderCircles = () => {
		const colors = ['white', '#E4E4E4', '#616161']
		// const colors = ['lightGrey', 'salmon', 'white']
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
		// context.globalCompositeOperation = 'exclusion'
		// context.globalCompositeOperation = 'color-burn'
		// context.globalCompositeOperation = 'lighten'
		// context.globalCompositeOperation = 'darken'
		// context.globalCompositeOperation = 'hue'
		// context.globalCompositeOperation = 'color-dodge'
		context.beginPath();
		
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.fillStyle = colors[dotColor];
		// context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
		// context.strokeStyle = 'rgba(136, 136, 136, 1)'
		// context.strokeRect(0, 0, centerX, centerY)
		// context.lineWidth = 6
		context.fill();
		// context.stroke()
		// context.strokeRect(0, 0, canvas.width, canvas.height)
			}
		
		}
			// canvas.width = 860
			// canvas.height = 860

	
				context?.clearRect(0, 0, width, height)
				let i : number
				
				for (i = -2; i < (width / 60); i++) {
				
				renderCircles();

		// canvas.width = width * pixelRatio;
    	// canvas.height = height * pixelRatio;
	
		// canvas.width = width * pixelRatio;
		// canvas.height = height * pixelRatio;
		
		// Optional border / Counldn't decide if I wanted it or not
		// context.lineWidth = 3;
		// context.strokeStyle = 'lightsalmon';
		// context.stroke();
			}
		}
	
		useEffect(() => {
			console.log('first run')


			
		  if (canvas) {
			context?.clearRect(0, 0, width, height)
			let i : number
			
			for (i = -2; i < (width / 120); i++) {
			
			drawStuff();
		}
			// do something here with the canvas
		  }
		}, [canvas, height, width])


	return (
		<>
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
						<Heading ref={button} />
					</Row>
					{/* <Test onClick={() => console.log('hi')}> */}
						
					{/* </Test> */}
				</Landing>
				<Button onClick={() => hueShift()}>Test me</Button>
			</AppWrapper>
			<div id='canvasWrapper'>
		<canvas ref={canvasRef} style={styles.canvas} height={height + 'px'} width={width + 'px'} id='myCanvas' onClick={() => drawStuff()} />
		</div>
		</ThemeProvider>
		{/* <Landing onClick={() => drawStuff()}> */}
		
		{/* </Landing> */}
		</>
	)
}

export default App
