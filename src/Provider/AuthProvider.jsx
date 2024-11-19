import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    // const auth = getAuth()
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createNewUser,
        signInUser
    }
  return (
    <>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  )
}

export default AuthProvider
