import React from 'react'

function Title({ title }) {
	return (
		<h1 className="text-2xl text-center hover:text-white font-bold duration-200">
			{title}
		</h1>
	)
}

export default Title
