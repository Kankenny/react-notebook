import React from 'react'

function ConceptContainer({ children, className }) {
	return (
		<div
			className={`min-h-[80vh] flex flex-col justify-center align-middle ${className}`}
		>
			{children}
		</div>
	)
}

export default ConceptContainer
