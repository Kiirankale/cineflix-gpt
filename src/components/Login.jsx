import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { addUser } from "../utils/userSlice.js";
import { useDispatch } from "react-redux";
import { BG_IMG } from "../utils/constants.js";

const Login = () => {
  const dispatch = useDispatch()


  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (!emailValue || !passwordValue) {
      setErrorMessage("Email and Password are required");
      return;
    }

    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    // SIGN UP
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/138102718?v=4"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });


        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });




    }
    // SIGN IN
    else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;



        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />

      <div className="absolute w-full">
        <img className="w-full"
          src={BG_IMG}
          alt="background"
        />
      </div>

      <form onSubmit={handleSubmit} className="absolute bg-black text-white w-4/12 mx-auto left-0 right-0 mt-25 flex flex-col px-15 py-12 gap-2">
        <h1 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="px-2 py-4 mt-6 text-sm bg-black text-white border border-gray-600 rounded-lg outline-none"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="px-2 py-4 mt-5 text-sm bg-black text-white border border-gray-600 rounded-lg outline-none"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-2 py-4 mt-5 text-sm bg-black text-white border border-gray-600 rounded-lg outline-none"
        />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          className="bg-red-500 text-white px-2 py-2 rounded-lg mt-5 font-bold"
          type="submit"
        >
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </button>

        <p className="mt-4">
          <span className="text-gray-400">
            {isSignIn ? "New to Netflix?" : "Already a user?"}
          </span>
          <button
            type="button"
            className="text-red-500 font-bold ml-2"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign up now." : "Sign In now."}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
