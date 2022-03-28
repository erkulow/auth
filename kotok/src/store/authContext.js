import React, { useState } from 'react'
export const authContext = React.createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
})
export const AuthContextProvider = (props) => {
	const [token, setToken] = useState(null)

	const userIsloggedIn = !!token

	const loginHandler = (token) => {
		setToken(token)
	}

	const logoutHandler = () => {
		setToken(null)
	}
	const contextValue = {
		token: token,
		isLoggedIn: userIsloggedIn,
		login: loginHandler,
		logout: logoutHandler,
	}
	return (
		<authContext.Provider value={contextValue}>
			{props.children}
		</authContext.Provider>
	)
}
