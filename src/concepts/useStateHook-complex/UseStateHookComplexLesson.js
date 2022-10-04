import React, { useState, Fragment } from 'react'
import Button from '../../ui/Button'

import ConceptContainer from '../../ui/ConceptContainer'
import Input from '../../ui/Input'
import Title from '../../ui/Title'

function UseStateHookComplexLesson() {
	const [userInfo, setUserInfo] = useState({
		firstName: '123',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const userInfoChangeHandler = (e) => {
		const { name: userInputField, value } = e.target
		setUserInfo((prevState) => {
			return { ...prevState, [userInputField]: value }
		})
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		console.log(userInfo)
	}

	return (
		<Fragment>
			<Title title="useState Hook Complex" isConcept={true}></Title>
			<ConceptContainer>
				<div className="space-y-5">
					<div className="flex flex-col text-center justify-center text-4xl">
						<p>{`First Name: ${userInfo.firstName}`}</p>
						<p>{`Last Name: ${userInfo.lastName}`}</p>
						<p>{`Email Address: ${userInfo.email}`}</p>
						<p>{`Password: ${userInfo.password}`}</p>
						<p>{`Confirm Password: ${userInfo.confirmPassword}`}</p>
					</div>
					<div>
						<form
							action="submit"
							onSubmit={onSubmitHandler}
							className="flex justify-center space-x-10"
						>
							<Input
								name="firstName"
								onChange={userInfoChangeHandler}
								placeholder="First Name"
								type="text"
							/>
							<Input
								name="lastName"
								onChange={userInfoChangeHandler}
								placeholder="Last Name"
								type="text"
							/>
							<Input
								name="email"
								onChange={userInfoChangeHandler}
								placeholder="Email Address"
								type="email"
							/>
							<Input
								name="password"
								onChange={userInfoChangeHandler}
								placeholder="Password"
								type="password"
							/>
							<Input
								name="confirmPassword"
								onChange={userInfoChangeHandler}
								placeholder="Confirm Password"
								type="password"
							/>
							<Button onClick={onSubmitHandler}>
								Submit
							</Button>
						</form>
					</div>
				</div>
			</ConceptContainer>
		</Fragment>
	)
}

export default UseStateHookComplexLesson
