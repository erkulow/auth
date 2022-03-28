import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../store/authContext'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
	const authCtx = useContext(authContext)

	const isLoggedIn = authCtx.isLoggedIn

	return (
		<header className={classes.header}>
			<Link to='/'>
				<div className={classes.logo}>React Auth</div>
			</Link>
			<nav>
				<ul>
					{!isLoggedIn && (
						<li>
							<Link to='/auth'>Login</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<button onClick={authCtx.logout}>Logout</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
