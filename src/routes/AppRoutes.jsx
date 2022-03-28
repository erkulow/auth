import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import ProfilePage from '../pages/ProfilePage'
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import { authContext } from '../store/authContext'
import PrivatRout from './PrivatRout'

const AppRoutes = () => {
	const { isLoggedIn } = useContext(authContext)
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<PrivatRout
					component={<AuthPage />}
					when={!isLoggedIn}
					to={'/'}
					path={'/auth'}
				/>
				<PrivatRout
					component={<ProfilePage />}
					when={isLoggedIn}
					to={'/auth'}
					path={'/profile'}
				/>
			</Switch>
		</Layout>
	)
}

export default AppRoutes
