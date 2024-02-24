import React, { useEffect, useRef, useState } from 'react'

import styled, { css, ThemeProvider } from 'styled-components'
import Typed from 'typed.js'

import theme from '../../assets/theme.ts'
import styles from './styles.ts'



// class Canvas extends React.Component {
// 	constructor(props) {
// 		super(props)
		
		
// 		// const colorPickerRef = React.createRef()

		
// 	}

function App() {
	const [rotate, setRotate] = useState(0)
	const AppWrapper = styled.div`
	display: flex;
`

const Landing = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* background-color: black; */
	background-color: ${theme.colorPallet.black};
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
	flex-direction: 'row';
	height: 200;
	background-color: ${theme.colorPallet.salmon};
	hue-rotate: ${rotate};
`
	const button = useRef(null)
	useEffect(() => {
		const typed = new Typed(button.current, {
			strings: [
				'I am passionate about... presence',
				'I am passionate about... coding',
				'I love... live music',
				'I enjoy... problem solving',
				'I escape with... weightlifting',
				'I seek... consciousness <i class="fas fa-om"></i>',
				'I would love... to meet you',
			], //My sentences
			typeSpeed: 50, //How fast it types (higher = slower)
			backSpeed: 60, //How fast it backspaces (higher = slower)
			startDelay: 100,
			loop: true,
			showCursor: false,
		})
		return () => {
			typed.destroy()
		}
	}, [])

	const hueShift = () => {

		if (rotate !== 315){setRotate(rotate + 45)}
            else {setRotate(0)}
	}

	// export function Canvas() {
		
	// }

	const canvasRef = useRef<HTMLCanvasElement>(null)
	
		useEffect(() => {
			const canvas = canvasRef.current
			const context = canvas?.getContext('2d')
		  if (canvas) {
			
			
			function drawStuff() {
                // Had to play with the math to get the sizing and spacing right
                if (canvas && context) {
				var centerX = Math.floor(Math.random() * styles.canvas.width / 6);
                var centerY = 80 + Math.floor(Math.random() * styles.canvas.height / 6);
                var radius = Math.floor(Math.random() * 150);
                //  Defines what happens when they overlap
                context.globalCompositeOperation = "color-burn";
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                context.fillStyle = 'black';
                context.fill();
				}
				
                // Optional border / Counldn't decide if I wanted it or not
                // context.lineWidth = 3;
                // context.strokeStyle = 'lightsalmon';
                // context.stroke();
            }
			drawStuff()
			// do something here with the canvas
		  }
		}, [])


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
					<Test onClick={() => console.log('hi')}>Hi
						{/* <Heading ref={button} onClick={() => console.log('hi')} /> */}
					</Test>
				</Landing>
			</AppWrapper>
		</ThemeProvider>
		<canvas ref={canvasRef} style={styles.canvas} id='myCanvas'>

		</canvas>
		</>
	)
}

export default App
