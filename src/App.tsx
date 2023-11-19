import './App.css'
import React, { useEffect, useRef } from 'react'

import styled from 'styled-components'
import Typed from 'typed.js'

const AppWrapper = styled.div`
	display: flex;
`

const Landing = styled.div`
	display: flex;
  justify-content: space-between;
`

const Heading = styled.h1`
	color: black;
	font-size: 24;
`

function App() {
  const button = useRef(null)
  useEffect(() => {
    const typed = new Typed(button.current, {
      strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });
  })
	return (
		<AppWrapper>
			<Landing>
				<Heading>Ryan Koch here</Heading>
        <Heading>Welcome to my personal site -- please enjoy this sample of my design philosphy and code :]</Heading>
        <Heading ref={button}>Button</Heading>
			</Landing>
		</AppWrapper>
	)
}

export default App
