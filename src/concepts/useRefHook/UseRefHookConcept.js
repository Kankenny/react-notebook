import React, { useRef, useState, Fragment, useEffect } from 'react'

import Title from '../../ui/Title'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import ConceptContainer from '../../ui/ConceptContainer'

const UseRefHookConcept = () => {
	const [name, setName] = useState('')
	const counterRef = useRef(1)

	const onChangeHandler = (e) => {
		setName(e.target.value)
	}

	useEffect(() => {
		counterRef.current = counterRef.current + 1
	})

	const inputRef = useRef()

	const focusOnInputHandler = () => {
		inputRef.current.focus()
	}

	return (
		<Fragment>
			<Title title="useRef Hook" isConcept={true}></Title>
			<ConceptContainer className="gap-20">
				<div className="flex flex-col text-center justify-center text-4xl">
					<p>{`Displaying a dynamic value that does not cause the component to rerender`}</p>
					<p>{`Component rendered this many times: ${counterRef.current}`}</p>
				</div>
				<div className="flex justify-center">
					<Input
						name="firstName"
						placeholder="First Name"
						type="text"
						value={name}
						onChange={onChangeHandler}
					></Input>
				</div>
				<div className="border border-black"></div>
				<div className="flex flex-col text-center mx-auto justify-center text-4xl">
					<p>{`Targetting DOM element`}</p>
					<Button onClick={focusOnInputHandler}>Focus</Button>
				</div>
				<div className="flex justify-center">
					<Input
						name="firstName"
						placeholder="First Name"
						type="text"
						value={name}
						onChange={onChangeHandler}
						ref={inputRef}
					></Input>
				</div>
			</ConceptContainer>
		</Fragment>
	)
}

export default UseRefHookConcept
