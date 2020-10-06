import { 
    createSlice,
    PayloadAction
 } from '@reduxjs/toolkit'

 interface UserType {
    id: string;
    firstName: string;
    lastName: string;
} 

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        setCurrentUser: (state: {user: UserType | null}, action: PayloadAction<UserType>) => {
            state.user = action.payload
        },
        clearCurrentUser: (state, action: PayloadAction) => {
            state.user = null
        },
    }
})

const { actions, reducer } = userSlice

export default reducer
export const { setCurrentUser, clearCurrentUser } = actions