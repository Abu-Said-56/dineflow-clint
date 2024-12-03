import { createContext, useEffect, useState, } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from "../firebase/firebase.config"
import axios from "axios";

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google and gitHub Provider
    const provider = new GithubAuthProvider()
    const googleProvider = new GoogleAuthProvider()

    // For Create User Or for register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // For Login or signIn user user 
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google sign in
    const GooglrLogin = () => {
        setLoading();
        return signInWithPopup(auth, googleProvider)
    }

    // Sign In with github
    const GitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // for log Out 
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("User  ",currentUser)
            
            if(currentUser){
                // const userInfo = { email: currentUser.email };  
                axios.post("https://dineflow-server.vercel.app/jwt",{ email: currentUser?.email } )
                
                .then(res=>{
                    if(res?.data?.token){
                        
                        localStorage.setItem("access-token", res?.data?.token)
                        setLoading(false);
                    }
                }) 
            }else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            
            
            
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [auth])


    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        GooglrLogin,
        GitHubLogin
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;