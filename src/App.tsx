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
	useFirestore
} from "react-redux-firebase"
import { useSelector } from "react-redux"
import { RootState } from "./store"
import {
	projectsSelector,
	authSelector
} from "./store/selector"


const FirebaseLoaded: React.FC<{ children: any }>= ({ children }) => {
	const auth = useSelector(authSelector)
	const projects = useSelector(projectsSelector)
	const isInitializing = useSelector((state: RootState) => state.firebase.isInitializing)

	if (!isLoaded(auth) || isInitializing || !isLoaded(projects)) {
		return <div>loading...</div>
	}
	return children
}

const App: React.FC = () => {
	const firestore = useFirestore()
	if (firestore) {
		firestore.get({
			collection: "projects",
			orderBy: ["createdAt", "desc"],
		})
		firestore.setListeners([
			{
				collection: "projects",
				orderBy: ["createdAt", "desc"]
			},
		])
	}

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