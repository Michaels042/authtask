import React, { useEffect, useState } from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
// import AuthContext from '../context/authContext';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';



const Topnav = () => {
  const [ authUser, setAuthUser ] = useState(null);

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
    <div>
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
 
  <Navbar.Collapse>
    {
      authUser
      ?
      <>
       <div className="flex md:order-2">
       <span className="block text-sm mx-5">{`Signed In as ${authUser.email}`}</span>

    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">{`Signed In as ${authUser.email}`}</span>
      </Dropdown.Header>
      <Dropdown.Divider />
      <Navbar.Link my-5 href="/dashboard">
        Dashboard
      </Navbar.Link>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
      <Navbar.Link
        href="/"
        active={true}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/dashboard">
        Dashboard
      </Navbar.Link>
      <Navbar.Link href="/createImage">
        Image Creator
      </Navbar.Link>
        <Navbar.Link onClick={userSignOut}href="/signin">
        Sign Out
      </Navbar.Link>
      </>
      :

      <>
      <Navbar.Link href="/signup">
        Sign Up
      </Navbar.Link>
      <Navbar.Link href="/signin">
        Sign In
      </Navbar.Link>
      </>


    }
  
    
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Topnav


