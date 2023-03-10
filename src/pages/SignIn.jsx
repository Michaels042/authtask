import React, { useState } from 'react';
// import Forms from '../components/Forms'
import Topnav from '../components/Navbar';
import { Label, TextInput, Checkbox, Button  } from 'flowbite-react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom'

export const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard")
        console.log(user);
    }).catch((error) => {
        console.log(error)
    })
    }
   
  return (
    <div className='mb-5 justify-center content-center'>
         <Topnav />
         <h1 className='mb-5'>Sign In</h1>
        <form onSubmit={logIn} className="flex flex-col gap-6 bg-teal-100 w-3/6 border-gray-200 border-2 rounded-md p-5">
            <div>
                <div className="mb-2 block flex-start">
                <Label
                    htmlFor="email1"
                    value="Your email"
                />
                </div>
                <TextInput
                id="email1"
                type="email"
                placeholder="example@email.com"
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
                Submit
            </Button>
        </form>
        <p className="text-sm text-black  text-center">
            No account yet? {' '}
            <NavLink to="/signup">
                Sign up
            </NavLink>
        </p>
        
    </div>
  )
}
