import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword , signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
   const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const SignInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider);
        
        // .catch (error => {
        //    console.log(error.message);
        //    setError(error.message)
        // });
        
    } 

    useEffect( () => {
        onAuthStateChanged(auth, user=> {
            if(user) {
                console.log(user);
                setUser(user);
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth)
        .then(() => {

        })
        setUser('')
    };

   

    const logInInput = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            setUser('')
        })
        .catch(error => {
            setError(error.message)
        })

    }
    const handleEmailCheng = e => {
        setEmail(e.target.value);
    };
    const handlepasswordCheng = e => {
        setPassword(e.target.value)
    }

    const handleRegistation = e => {
        e.preventDefault()
        console.log(email, password);
        setUser('')
        if(password.length < 6) {
            setError('password shuld be 6 carecter');
            return;
        }
       
        if(!user.email) {
            logInInput(email, password)
        }
        if(user.email) {
         setUser('');
         return
        }
       
       
    };

    return {
        user,
        error,
        SignInGoogle,
        logInInput,
        logOut,
        handleRegistation,
        handlepasswordCheng,
        handleEmailCheng,
        

        
    }  
}

export default useFirebase;