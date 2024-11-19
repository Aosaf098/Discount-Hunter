import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)


    // const auth = getAuth()
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
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

    const signOutUser = () => {
        signOut(auth)
        .then(() => {
            console.log('Signed Out')
        })
        .catch((error) => {
            console.log(error.code)
        })
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        signInUser,
        googleSignIn,
        signOutUser
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
