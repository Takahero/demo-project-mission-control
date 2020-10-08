import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { firebaseReducer, FirebaseReducer } from "react-redux-firebase"

interface FirebaseState {
  firebase: FirebaseReducer.Reducer
}

const firebaseRootReducer = combineReducers<FirebaseState>({
  firebase: firebaseReducer,
})

const store = configureStore({
  reducer: firebaseRootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export default store
