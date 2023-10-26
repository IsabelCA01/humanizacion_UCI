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
    const [uid, setUid] = useState(null); // Agregamos el estado para almacenar el uid

    const singupfunction = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password);

    const loginFunction = async (email, password) => 
        signInWithEmailAndPassword(auth, email, password);
    

    const logoutFunction = () => signOut(auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                setUid(currentUser.uid); // Almacenamos el uid en el estado
            }
        
        })
        return () => unsubscribe();
    }, []);
    

    return <cont.Provider value={{ singupfunction, loginFunction, logoutFunction, user, loading, uid }}> {/* Agregamos el uid al value del Provider */}
        {children}</cont.Provider>;
}

export const useUid = () => { // Creamos un hook para acceder al uid desde cualquier otro código
    const { uid } = useContext(cont);
    return uid;
}
