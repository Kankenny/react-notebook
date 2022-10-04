import React from 'react'

import Card from './Card'

function ConceptContainer({ children }) {
	return <Card className="h-32 w-32">{children}</Card>
}

export default ConceptContainer
