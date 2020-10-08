import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import store from "./store/"
import { Router } from "react-router-dom"
import history from "./utils/history"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"
import { rrfProps } from "./store"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<Router history={history}>
					<App />
				</Router>
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
