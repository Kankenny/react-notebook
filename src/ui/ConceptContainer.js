import React from 'react'

import { Link } from 'react-router-dom'
import Card from './Card'

function ConceptContainer({ children, path }) {
	return (
		<Link to={path}>
			<Card className="h-64 w-64 select-none hover:text-white duration-200">
				{children}
			</Card>
		</Link>
	)
}

export default ConceptContainer
