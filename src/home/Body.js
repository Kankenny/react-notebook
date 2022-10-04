import React from 'react'
import { Routes, Route } from 'react-router-dom'

import UseStateHookSimpleContainer from '../concepts/useStateHook-simple/UseStateHookSimpleContainer'
import UseStateHookSimpleLesson from '../concepts/useStateHook-simple/UseStateHookSimpleLesson'

function Body({ children }) {
	return (
		<div className="min-h-screen grid grid-cols-2 md:grid-cols-3 p-4">
			<Routes>
				<Route path="*" element={<UseStateHookSimpleContainer />} />
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
