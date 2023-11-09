import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from "../Firebase/firebase.config";

export const authProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);

    const [loader, setLoader] = useState(true);

    const GoogleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const GithubSignIn = (provider) =>{
        return signInWithPopup(auth, provider);
    }
    const signInWithEmail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signUpWithEmail = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                                setUser(currentUser);
                                console.log('On State Change', currentUser);
                                setLoader(false)
                            })
                                 
        
        return ()=> { 
            unSubscribe();
        }
    },[])

    const [services, setServices] = useState([]);

    useEffect(() => {
            fetch('http://localhost:8080/services')
            .then(res => res.json())
            .then(result => setServices(result))
            .catch(error => console.error(error))
    },[])

    
    const authInfo = {
        user,
        services,
        loader,
        GoogleSignIn,
        GithubSignIn,
        signUpWithEmail,
        signInWithEmail,
        logOut
    }
    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthContext;