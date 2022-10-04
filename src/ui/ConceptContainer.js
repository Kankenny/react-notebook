import React from 'react'

function ConceptContainer({ children }) {
	return (
		<div className="min-h-[80vh] flex flex-col justify-center align-middle ">
			{children}
		</div>
	)
}

export default ConceptContainer
