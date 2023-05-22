import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import app from '../firebsae/firebaseConfig'
import { toast } from 'react-toastify';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const provider = new GoogleAuthProvider();


        

    // NEW WEB USER
    const newWebUser = (email,password,name,photoUrl)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL:photoUrl
                  }).then(() => {
                  }).catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
                  });
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    // LOGIN PREVIOUS USER 
    const loginUser = (email,password)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('login Successfull', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setLoading(false)
            })
            .catch((error) => {
                setLoading(true)
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setLoading(false)
            });
    }

    // WEBSITE USER OBSERVATION 
    
    useEffect(()=>{
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
           
    },[])


    // USER LOGOUT 
    const logout = ()=>{
        signOut(auth).then(() => {
            toast.success('logout successfull !', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
          }).catch((error) => {
            // An error happened.
          });
    }

    // GOOGLE SINGIN 
    const googleSingin = ()=>{
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }

    const information = {
        newWebUser,
        loginUser,
        user,
        loading,
        error,
        logout,
        googleSingin
    }

    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;