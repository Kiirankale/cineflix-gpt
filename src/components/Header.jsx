import React, { useEffect } from 'react'
import Logo from "../assets/logo.png"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const handleSignOut = () => {

    signOut(auth).then(() => {
     


    }).catch((error) => {
      // An error happened.
      navigate("/errorpage")
    });
  }
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div className='absolute z-10 w-full bg-linear-to-b from-black flex items-center justify-between  '>
      <img className='w-52  h-30  px-8 ' src={Logo} alt="logo" />
      {user &&
        <div className='flex pr-7'>
          <img className='w-15 rounded-4xl' src={user?.photoURL} alt="usericon" />
          <button className='text-white font-bold cursor-pointer' onClick={handleSignOut} >(Logout)</button>
        </div>

      }

    </div>

  )
}

export default Header;
