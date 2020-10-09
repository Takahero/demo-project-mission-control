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


const App: React.FC = () => {
  const auth = useSelector((state: RootState) => state.firebase.auth)
  const isInitializing = useSelector((state: RootState) => state.firebase.isInitializing)
  const firestore = useFirestore()

	firestore.get({ collection: "projects" })
	firestore.setListeners([
		{ collection: 'projects' },
	])

	if (!isLoaded(auth) || isInitializing) {
		return <div data-testid="app">loading...</div>
	}
	return (
		<div className="App" data-testid="app">
			<Route path="/project" component={Dashboard} />
			<Route path={["/signup", "/signin"]} component={Auth} />
			<Route exact path="/">
				<Redirect to="/project" />
			</Route>
		</div>
	)
}

export default App
