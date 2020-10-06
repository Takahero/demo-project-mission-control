import React from 'react'
import { clearCurrentUser } from '../../../store/user'
import { useDispatch } from 'react-redux'
import { pushHistoryTo } from '../../../utils/history'

const SignOutButton: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <button
            data-testid="sign-out-button"
            onClick={ (e) => {
                e.preventDefault()
                dispatch(clearCurrentUser())
                pushHistoryTo('/')
            }}
        >
            Sign Out
        </button>
    )
}

export default SignOutButton