import React from 'react'

function Title({ title, isConcept }) {
	const textSize = isConcept ? 'text-6xl' : 'text-4xl'

	return (
		<h1
			className={`${textSize} text-center hover:text-white font-bold duration-200`}
		>
			{title}
		</h1>
	)
}

export default Title
