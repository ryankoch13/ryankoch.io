import './App.css'
import React, { useEffect, useRef } from 'react'

import styled, { css, ThemeProvider } from 'styled-components'
import Typed from 'typed.js'

import theme from './theme.tsx'

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

function App() {
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
	return (
		<ThemeProvider theme={theme}>
			<AppWrapper>
				<Landing>
					<Row>
						<Heading>Ryan Koch here</Heading>
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
				</Landing>
			</AppWrapper>
		</ThemeProvider>
	)
}

export default App
