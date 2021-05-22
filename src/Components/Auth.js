import React, {useContext, useEffect} from 'react'
import { StateContext } from '../App'
import { auth } from '../firebase'

function Auth() {
    const[{user}, dispatch] = useContext(StateContext)

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log("user >>>>>>>>>", authUser)
            if(authUser){
                dispatch({type: 'SET_USER', user: authUser})
            }
            else{
                dispatch({type: 'SET_USER', user: null})
            }
        })
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Auth
