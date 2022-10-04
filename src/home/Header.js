import React from 'react'
import { useNavigate } from 'react-router-dom'

import HeaderFooterContainer from '../ui/HeaderFooterContainer'
import Subtitle from '../ui/Subtitle'

function Header() {
	const navigate = useNavigate()

	const backToHomeHandler = () => {
		navigate('/')
	}

	return (
		<HeaderFooterContainer onClick={backToHomeHandler}>
			My React Notebook
			<Subtitle subtitle="A library for React JS concepts" />
		</HeaderFooterContainer>
	)
}

export default Header
