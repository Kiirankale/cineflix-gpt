import React, { useEffect } from 'react'
import Logo from "../assets/logo.png"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANG } from "../utils/constants"
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(gptSearch);




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
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    const langName = e.target.value
    dispatch(changeLanguage(langName))

  }


  return (
    <div className='absolute z-10 w-full bg-linear-to-b from-black flex items-center justify-between  '>
      <img className='w-52  h-30  px-8 ' src={Logo} alt="logo" />
      {user &&

        <div className='flex mr-4 items-center'>
          {
            gptSearch && (
              <div className='text-white mr-3 px-2 '>
                <select onChange={handleLanguageChange} className='p-2 bg-black text-white'  >
                  {
                    SUPPORTED_LANG.map((lang) => <option key={lang.name} value={lang.identifier}>{lang.name}</option>)
                  }


                </select>
              </div>
            )


          }

          <button className='bg-violet-500 text-white px-2 mr-2 rounded h-8 cursor-pointer' onClick={handleGptSearchClick} >{gptSearch ? "HOME" : "Gpt Search"}</button>
          <img className='w-15 rounded-4xl' src={user?.photoURL} alt="usericon" />
          <button className='text-white font-bold cursor-pointer' onClick={handleSignOut} >(Logout)</button>
        </div>

      }

    </div>

  )
}

export default Header;
