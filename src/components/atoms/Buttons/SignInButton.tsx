import React from 'react'
import { setCurrentUser } from '../../../store/user'
import { useDispatch } from 'react-redux'
import { pushHistoryTo } from '../../../utils/history'


const SignInButton: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <button
            data-testid="sign-in-button"
            onClick={ (e) => {
                e.preventDefault()
                dispatch(setCurrentUser({ 
                    id: "randomID",
                    firstName: "Sign",
                    lastName: "In",
                }))
                pushHistoryTo('/')
            }
            }
        >
            Sign In
        </button>
    )
}

export default SignInButton