import React from 'react'

function HeaderFooterContainer(props) {
	return (
		<div
			className="bg-purple-700 min-w-full h-14 flex items-center justify-center text-center hover:text-white hover:bg-purple-900 duration-200 flex-col text-xl font-bold cursor-pointer select-none"
			{...props}
		>
			{props.children}
		</div>
	)
}

export default HeaderFooterContainer
