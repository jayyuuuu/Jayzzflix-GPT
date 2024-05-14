import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened
        navigate("/error");
      });
  };

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
    // Unsubscribe when component unmounts.
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle gpt Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full flex flex-col text-xs md:text-sm md:flex-row  md:justify-between px-2 md:px-8 py-2 bg-gradient-to-b from-black absolute z-10">
      <img
        className=" w-36 mx-auto h-24 md:mx-0 flex justify-center md:w-52 "
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex -mt-2 md:mt-0 md:p-4 justify-center">
          {showGptSearch && (
            <select
              className=" md:p-2 px-1 md:px-4 my-2 bg-gray-600 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" md:p-2 px-2 md:px-4 m-2 md:mx-4 rounded-md text-white bg-purple-800"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "GPT Search" : "Homepage"}
          </button>

          <img
            className=" p-2 md:m-1  w-12 h-12 rounded-md "
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="bg-red-700 p-2 px-2 my-2 rounded-md font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
