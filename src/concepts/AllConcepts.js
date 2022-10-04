import React, { useState } from 'react'

import UseStateHookSimpleContainer from '../concepts/useStateHook-simple/UseStateHookSimpleContainer'
import UseStateHookComplexContainer from '../concepts/useStateHook-complex/UseStateHookComplexContainer'

function AllConcepts() {
	const [concepts] = useState([
		<UseStateHookSimpleContainer key="1" />,
		<UseStateHookComplexContainer key="2" />,
	])

	return (
		<div className="flex justify-around space-x-4 min-w-full min-h-[85vh]">
			{concepts}
		</div>
	)
}

export default AllConcepts
