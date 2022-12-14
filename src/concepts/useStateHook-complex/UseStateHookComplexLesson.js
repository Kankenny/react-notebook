import React, { useState, Fragment } from 'react'
import Button from '../../ui/Button'

import ConceptContainer from '../../ui/ConceptContainer'
import Input from '../../ui/Input'
import Title from '../../ui/Title'

function UseStateHookComplexLesson() {
	const [userInfo, setUserInfo] = useState({
		firstName: '',
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
								value={userInfo.firstName}
								type="text"
							/>
							<Input
								name="lastName"
								onChange={userInfoChangeHandler}
								placeholder="Last Name"
								value={userInfo.lastName}
								type="text"
							/>
							<Input
								name="email"
								onChange={userInfoChangeHandler}
								placeholder="Email Address"
								value={userInfo.email}
								type="email"
							/>
							<Input
								name="password"
								onChange={userInfoChangeHandler}
								placeholder="Password"
								value={userInfo.password}
								type="password"
								autoComplete="on"
							/>
							<Input
								name="confirmPassword"
								onChange={userInfoChangeHandler}
								placeholder="Confirm Password"
								value={userInfo.confirmPassword}
								type="password"
								autoComplete="on"
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
