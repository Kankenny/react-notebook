import Header from './home/Header'
import Body from './home/Body'
import Footer from './home/Footer'

import './App.css'

function App() {
	return (
		<div className="bg-amethyst min-h-screen flex flex-col justify-between tracking-wide">
			<Header />
			<Body />
			<Footer />
		</div>
	)
}

export default App
