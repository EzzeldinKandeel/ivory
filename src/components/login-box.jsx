import React from 'react'
import '../styles/login.css'

function LoginBox() {
	const [loginData, setLoginData] = React.useState({ email: '', password: '' })

	function handleChange(event) {
		const { name, value } = event.target
		setLoginData((prevLoginData) => {
			return {
				...prevLoginData,
				[name]: value,
			}
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
	}

	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<div className='input-container'>
					<label>البريد الإلكتروني: </label>
					<input
						type='email'
						name='email'
						onChange={handleChange}
						value={loginData.email}
						className='input-box'
						required
					/>
				</div>
				<div className='input-container'>
					<label>الرقم السري: </label>
					<input
						type='password'
						name='password'
						onChange={handleChange}
						value={loginData.password}
						className='input-box'
						required
					/>
				</div>
				<div className='button-container'>
					<input type='submit' value='دخول' className='main-button' />
				</div>
			</form>
		</div>
	)
}

export default LoginBox
