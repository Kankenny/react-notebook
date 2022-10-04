import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AllConcepts from '../concepts/AllConcepts'

import UseStateHookSimpleLesson from '../concepts/useStateHook-simple/UseStateHookSimpleLesson'

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
					element={<UseStateHookSimpleLesson />}
				/>
			</Routes>
		</div>
	)
}

export default Body
