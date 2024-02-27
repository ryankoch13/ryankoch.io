import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../../hooks/window.tsx'

import styles from './styles.ts'

const Canvas = () => {
    const [canvasContext, setCanvasContext] = useState(null)
    const [presses, setPresses] = useState(0)

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const { height, width } = useWindowDimensions()

    useEffect(() => {
        const canvas = canvasRef.current
	    const context = canvas?.getContext('2d')
        setCanvasContext(context)
        const drawStuff = () => {
            console.log('hi')
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
        drawStuff()
    }, [canvasRef, presses])


    return (
        <div id='canvasWrapper'>
				<canvas ref={canvasRef} style={styles.canvas} height={height + 'px'} width={width + 'px'} id='myCanvas' onClick={() => setPresses(presses + 1)} />
			</div>
    )
}

export default Canvas