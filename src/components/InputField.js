/* eslint-disable no-unused-vars */
import React from 'react'

const InputField = (props) => {
	const { type, label, text, handleNewValue } = props

	const onInputHandler = (event) => {
		const { value } = event.target
		handleNewValue(value)
	}

	const styles = {
		container: {
			display: 'flex',
			justifyContent: 'space-between',
			width: '40%',
			margin: '0.5rem'
		},
		label: {

		},
		input: {
      
		}
	}

	return (
		<div style={styles.container}>
			<label htmlFor={label} style={styles.label}>{label}</label>
			<input id={label} type={type} value={text} onChange={onInputHandler} style={styles.input}></input>
		</div>
	)
}

export default InputField