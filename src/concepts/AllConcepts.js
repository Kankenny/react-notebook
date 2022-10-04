import React, { useState } from 'react'

import UseStateHookSimpleContainer from '../concepts/useStateHook-simple/UseStateHookSimpleContainer'

function AllConcepts() {
	const [concepts] = useState([
		<UseStateHookSimpleContainer key="1" />,
		<UseStateHookSimpleContainer key="2" />,
	])

	return (
		<div className="flex justify-around space-x-4 min-w-full min-h-[85vh]">
			{concepts}
		</div>
	)
}

export default AllConcepts
