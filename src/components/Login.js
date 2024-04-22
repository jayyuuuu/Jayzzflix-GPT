import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/70216818?v=4",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-full h-auto absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background Img"
        ></img>
      </div>
      <div className="bg-black md:w-4/12 h-screen absolute my-20 p-6 left-0 right-0 mx-auto rounded-l text-white bg-opacity-85">
        <form onSubmit={(e) => e.preventDefault()} className="text-center pt-8">
          <h1 className="text-3xl font-bold px-14 py-4 text-left">
            {!isSignInForm ? "Sign Up" : "Sign In"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-4 m-2 w-full md:w-9/12 border border-gray-400 rounded-md bg-[#1D2838] bg-opacity-80"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-4 m-2 w-full md:w-9/12 border border-gray-400 rounded-md bg-[#1D2838] bg-opacity-80"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 m-2 w-full md:w-9/12 border border-gray-400 rounded-md bg-[#1D2838] bg-opacity-80"
          />
          <p className="text-red-600 font-bold p-2">{errorMessage}</p>
          <button
            className="bg-red-600 w-full md:w-9/12 px-4 py-2 p-2 m-2  font-bold rounded-md"
            onClick={handleButtonClick}
          >
            {!isSignInForm ? "Sign Up" : "Sign In"}
          </button>
        </form>
        {isSignInForm && (
          <div className=" text-center">
            <h1 className="text-gray-400 p-2">OR</h1>
            <button className="bg-gray-500 font-bold w-full md:w-9/12 py-2 my-3 rounded-md bg-opacity-50">
              Use a sign-in code
            </button>
            <h1>Forget Password?</h1>
          </div>
        )}
        <div className="px-14 py-4">
          <input
            type="checkbox"
            id="rememberMe"
            className="form-checkbox h-5 w-5 m-2"
          />
          <label htmlFor="rememberMe" className="text-left">
            Remember me
          </label>
          {/* <h1 className="text-left">Remember me</h1> */}
          <h1 className="text-left text-gray-400 p-2">
            {!isSignInForm ? "Already regesterd? " : " New to Netflix? "}
            <span
              className=" text-white font-bold cursor-pointer"
              onClick={toggleSignUp}
            >
              {!isSignInForm ? "Sign in now. " : "Sign up now. "}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
