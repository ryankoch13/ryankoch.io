// import React, { useEffect, useRef, useState } from 'react'

export const shift = (degree: number) => {
    const hueShift = () => {
		if (degree !== 315){return degree + 45}
			else {return 0}
	}
    hueShift()
}