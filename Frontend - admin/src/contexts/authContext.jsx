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
export const useUid = () => { // Exportamos una función para obtener el UID desde otros archivos
    const { uid } = useContext(cont);
    return uid;
}

export function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uid, setUid] = useState(null); // Agregamos el estado para almacenar el UID

    const singupfunction = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUid = userCredential.user.uid;
            console.log("New user UID:", newUid);
            setUid(newUid); // Almacenamos el UID en el estado
            return newUid; // Retornamos el UID
        });

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
    

    return <cont.Provider value={{ singupfunction, loginFunction, logoutFunction, user, loading, uid }}> {/* Pasamos el UID como valor del contexto */}
        {children}</cont.Provider>;
}
