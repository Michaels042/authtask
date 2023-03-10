 import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState} from 'react';
 import { auth } from '../firebase';
 
 const AuthDetails = () => {
    const [ authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out successfully');
        }).catch(error => console.log(error))
    }

   return (
     <div>{authUser ? <><h3>{`Signed In as ${authUser.email}`}</h3><button onClick={userSignOut}>Sign Out</button></> : <h3>Signed Out</h3>}</div>
   )
 }
 
 export default AuthDetails