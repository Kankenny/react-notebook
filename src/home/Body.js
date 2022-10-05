import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AllConcepts from '../concepts/AllConcepts'

import UseStateHookSimpleLesson from '../concepts/useStateHook-simple/UseStateHookSimpleLesson'
import UseStateHookComplexLesson from '../concepts/useStateHook-complex/UseStateHookComplexLesson'
import UseRefHookConcept from '../concepts/useRefHook/UseRefHookConcept'

function Body() {
	return (
		<div className="p-4">
			<Routes>
				<Route path="*" element={<AllConcepts />} />
				<Route path="/all-concepts" element={<AllConcepts />} />
				<Route
					path="/useState-simple"
					element={<UseStateHookSimpleLesson />}
				/>
				<Route
					path="/useState-complex"
					element={<UseStateHookComplexLesson />}
				/>
				<Route path="/useRef" element={<UseRefHookConcept />} />
			</Routes>
		</div>
	)
}

export default Body
