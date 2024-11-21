import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/Firebase.config';
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [eyeOpen, setEyeOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    // const navigate = useNavigate()

    console.log(user)
    console.log(auth.currentUser)
    const currentUser = auth.currentUser
    // const auth = getAuth()
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedData) => {
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
        // navigate('/')
    }


    const logOutUser = () => {
        setLoading(true)
        console.log('logging out')
        return signOut(auth)
    }

    const handleEyeOpen = () => {
        setEyeOpen(!eyeOpen)
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
        loading
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
