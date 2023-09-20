import React, {createContext, useContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut,
        } from "firebase/auth";
import { auth } from "../../firebase1";

export const cont = createContext();

export const useAuth = () => {
    const context= useContext(cont)
    if (!context) throw new Error ("There is no auth provider")
    return context

}

export function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const singupfunction = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password);

    const loginFunction = async (email, password) => 
        signInWithEmailAndPassword(auth, email, password);

    const logoutFunction = () => signOut(auth);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        
        })
        return () => unsubscribe();
    }, []);
    

    return <cont.Provider value={{ singupfunction, loginFunction, logoutFunction, user, loading}}>
        {children}</cont.Provider>;
}