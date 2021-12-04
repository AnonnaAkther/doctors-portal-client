import { useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// initialize firebase app

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})

    const registerUser = (email, password) => {
        
    }

    return{
        user,
    }
}

export default useFirebase;