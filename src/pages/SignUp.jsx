import React, { useState } from 'react';
// import Forms from '../components/Forms'
import Topnav from '../components/Navbar';
import { Label, TextInput, Checkbox, Button  } from 'flowbite-react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
    }).catch((error) => {
        console.log(error);
    })
    }
   
  return (
    <div>
         <Topnav />
         <h1>Create Account</h1>

        <form onSubmit={register} className="flex flex-col gap-4 flex flex-col gap-6 bg-teal-200 w-3/6 border-gray-200 border-2 rounded-md p-5">
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="email1"
                    value="Your email"
                />
                </div>
                <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="password1"
                    value="Your password"
                />
                </div>
                <TextInput
                id="password1"
                type="password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                Remember me
                </Label>
            </div>
            <Button type="submit">
                Sign Up
            </Button>
        </form>
        
    </div>
  )
}
