import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const GoogleSignIn = (Provider) => {
        return signInWithPopup(auth, Provider)
    };
    const UpdateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    };
    const SignOut =()=>{
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser)
                setUser(currentUser)
            }
            else {
                console.log("logout User")
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo = {
        Register,
        Login,
        GoogleSignIn,
        UpdateUser,
        user,
        SignOut,
        setUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;