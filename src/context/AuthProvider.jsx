import React, { use, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading , setLoading]= useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser =(email, password)=>{
         setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser =()=>{
         setLoading(true)
        return signOut(auth);
    }
    // onAuthStateChanged(auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log('inside observer', currentUser)
    //     }else{
    //         console.log('inside observer else', currentUser)
    //     }
    // })



    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log('curentuser isn auth state change', currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
    }


    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;