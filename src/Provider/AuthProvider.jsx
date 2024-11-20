import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)

    console.log(user)
    console.log(auth.currentUser)
    const currentUser = auth.currentUser
    // const auth = getAuth()
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.code)
        })
    }

    const logOutUser = () => {
        console.log('logging out')
        return signOut(auth)
    }

    // const signOutUser = () => {
    //     signOut(auth)
    //     .then(() => {
    //         console.log('Signed Out')
    //     })
    //     .catch((error) => {
    //         console.log(error.code)
    //     })
    // }

    const authInfo = {
        user,
        currentUser,
        setUser,
        createNewUser,
        signInUser,
        googleSignIn,
        logOutUser,
        updateUserProfile
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

  return (
    <>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  )
}

export default AuthProvider
