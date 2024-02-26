import React, { useEffect, useRef, useState } from 'react'

import styled, { css, ThemeProvider } from 'styled-components'
import Typed from 'typed.js'

interface TypedProps {
    strings: string[]
    ref: any
    typeSpeed?: number
    backSpeed?: number
    startDelay?: number
    showCursor?: boolean
}

const TypedComponent = (props: TypedProps) => {
    const { strings, ref, typeSpeed, backSpeed, startDelay, showCursor } = props
    if (ref) {
		const typed = new Typed(ref.current, {
			strings: strings, //My sentences
			typeSpeed: typeSpeed ? typeSpeed : 50, //How fast it types (higher = slower)
			backSpeed: backSpeed ? backSpeed : 60, //How fast it backspaces (higher = slower)
			startDelay: startDelay ? startDelay : 100,
			loop: true,
			showCursor: showCursor ? showCursor : false,
		})
	return typed
}}

export default TypedComponent