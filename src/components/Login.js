/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InputField from './InputField'
import Submit from './Submit'
import loginService from '../services/login'
import blogService from '../services/blogs'

const Login = ({ onUserLoggedIn, logger }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const onUsernameChange = (value) => {
		setUsername(value)
	}

	const onPasswordChange = (value) => {
		setPassword(value)
	}

	const onSubmitHandler = async (event) => {
		event.preventDefault()
		try {
			const user = await loginService.login({
				username, password,
			})

			window.localStorage.setItem(
				'loggedBloglistUser', JSON.stringify(user)
			)
			blogService.setToken(user.token)
			setUsername('')
			setPassword('')
			onUserLoggedIn(user)
			logger('success', `Logged in as ${user.username}`)
		} catch (exception) {
			logger('danger', 'Invalid username or password')
		}
	}

	const styles = {
		container: {

		}
	}

	return (
		<div styles={styles.container}>
			<h2>Login</h2>
			<form onSubmit={onSubmitHandler}>
				<InputField label='Username' type='text' text={username} handleNewValue={onUsernameChange}/>
				<InputField label='Password' type='password' text={password} handleNewValue={onPasswordChange}/>
				<Submit text='Login' />
			</form>
		</div>
	)
}

Login.propTypes = {
	onUserLoggedIn: PropTypes.func.isRequired,
	logger: PropTypes.func.isRequired,
}

export default Login