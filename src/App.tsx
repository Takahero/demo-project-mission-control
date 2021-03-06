import React from "react"
import Dashboard from "./pages/Dashboard"
import Auth from "./pages/Auth"
import "./App.css"
import {
	Route,
	Redirect
} from "react-router-dom"
import {
	isLoaded,
	useFirestoreConnect
} from "react-redux-firebase"
import { useSelector } from "react-redux"
import { RootState } from "./store"
import {
	projectsSelector,
	isAuthSelector
} from "./store/selector"

const FirebaseLoaded: React.FC<{ children: any }>= ({ children }) => {
	const isAuthLoaded = useSelector(isAuthSelector)
	const projects = useSelector(projectsSelector)
	const isInitializing = useSelector((state: RootState) => state.firebase.isInitializing)

	if (!isAuthLoaded || isInitializing || !isLoaded(projects)) {
		return <div>loading...</div>
	}
	return children
}

const App: React.FC = () => {
	useFirestoreConnect([
        {
            collection: "projects",
            orderBy: ["createdAt", "desc"]
        }
    ])

	return (
		<div className="App" data-testid="app">
			<FirebaseLoaded>
				<Route path="/project" component={Dashboard} />
				<Route path={["/signup", "/signin"]} component={Auth} />
				<Route exact path="/">
					<Redirect to="/project" />
				</Route>
			</FirebaseLoaded>
		</div>
	)
}

export default App