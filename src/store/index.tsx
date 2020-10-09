import {
	configureStore,
	combineReducers,
	getDefaultMiddleware,
} from "@reduxjs/toolkit"
import {
	firebaseReducer,
	FirebaseReducer,
	getFirebase,
	actionTypes as rrfActionTypes,
} from "react-redux-firebase"
import { firebase } from "../firebase"
import {
	constants as rfConstants,
	createFirestoreInstance,
	firestoreReducer,
	getFirestore
} from "redux-firestore"

interface ProfileType {
	firstName: string
	lastName: string
}

interface FirebaseState {
	firebase: FirebaseReducer.Reducer<ProfileType>
	// redux-firestore issue
	firestore: any
}

const firebaseRootReducer = combineReducers<FirebaseState>({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
})

const extraArgument = {
	getFirebase,
	getFirestore,
}

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [
				// just ignore every redux-firebase and react-redux-firebase action type
				...Object.keys(rfConstants.actionTypes).map(
					(type) => `${rfConstants.actionsPrefix}/${type}`
				),
				...Object.keys(rrfActionTypes).map(
					(type) => `@@reactReduxFirebase/${type}`
				),
			],
			ignoredPaths: ["firebase", "firestore"],
		},
		thunk: {
			extraArgument,
		},
	}),
]

const store = configureStore({
	reducer: firebaseRootReducer,
	middleware,
})

const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
}

export type RootState = ReturnType<typeof store.getState>
export { rrfProps }
export default store
