import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
export const authContext = React.createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
})
export const AuthContextProvider = (props) => {
	const history = useHistory()
	const [token, setToken] = useState(null)

	const userIsloggedIn = !!token

	useEffect(() => {
		const initialToken = localStorage.getItem('@token-onliine-store')
		setToken(initialToken)
	}, [])

	const loginHandler = (token) => {
		setToken(token)
		localStorage.setItem('@token-onliine-store', token)
	}

	const logoutHandler = () => {
		setToken(null)
		localStorage.removeItem('@token-onliine-store')
		history.replace('/')
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
