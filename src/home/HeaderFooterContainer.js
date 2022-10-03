import React from 'react'

function HeaderFooterContainer({ children }) {
	return (
		<div className="bg-purple-700 min-w-full h-14 flex items-center justify-center text-center hover:text-white hover:bg-purple-900 duration-200">
			{children}
		</div>
	)
}

export default HeaderFooterContainer
