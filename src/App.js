import { Routes, Route } from 'react-router-dom'

import Header from './home/Header'
import Footer from './home/Footer'

import './App.css'

function App() {
	return (
		<div className="bg-amethyst min-h-screen flex flex-col justify-between">
			<Header />
			<Routes></Routes>
			<Footer />
		</div>
	)
}

export default App
