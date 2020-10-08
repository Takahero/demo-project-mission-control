import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import { firebaseReducer } from 'react-redux-firebase'

const store = configureStore({
    reducer: {
        user: userReducer,
        firebase: firebaseReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store
