import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import auth from '../Firebase/firebase.config';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState('Rahim')
    const [eyeOpen, setEyeOpen] = useState(true)
    const [loading, setLoading] = useState(true)


    console.log(user)
    console.log(auth.currentUser)
    const currentUser = auth.currentUser
    // const auth = getAuth()
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedData) => {
        setLoading(true)
        setUser(currentUser)
        console.log(currentUser)
        return updateProfile(auth.currentUser, updatedData)
    }

    const signInUser = (email, password) => {
        setLoading(true)
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
        setLoading(true)
        return signOut(auth)
    }

    const handleEyeOpen = () => {
        setEyeOpen(!eyeOpen)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
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
        updateUserProfile,
        eyeOpen,
        handleEyeOpen,
        loading,
        forgetPassword
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
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
