import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider()

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () =>{
        return signOut(auth)
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleprovider)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false);
            console.log('auth state changed', currentUser )
        })
        return() =>{
            unSubscribe();
        }
    }, [])
    const authInfo = {user, loading, createUser, signIn, userSignOut, googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;