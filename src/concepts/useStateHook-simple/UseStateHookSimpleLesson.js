import React, { useState, Fragment } from 'react'
import Button from '../../ui/Button'

import ConceptContainer from '../../ui/ConceptContainer'
import Title from '../../ui/Title'

function UseStateHookSimpleLesson() {
	const [count, setCount] = useState(0)

	const onIncrementHandler = () => {
		setCount((prevState) => prevState + 1)
	}

	const onDecrementHandler = () => {
		setCount((prevState) => prevState - 1)
	}

	const onResetHandler = () => {
		setCount(0)
	}

	return (
		<Fragment>
			<Title title="useState Hook Simple" isConcept={true}></Title>
			<ConceptContainer>
				<div className="space-y-5">
					<div className="flex justify-center text-4xl">
						{count}
					</div>
					<div className="flex justify-center space-x-10">
						<Button onClick={onDecrementHandler}>-</Button>
						<Button onClick={onResetHandler}>Reset</Button>
						<Button onClick={onIncrementHandler}>+</Button>
					</div>
				</div>
			</ConceptContainer>
		</Fragment>
	)
}

export default UseStateHookSimpleLesson
