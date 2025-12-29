import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const USER_AVATAR =
    "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png";

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Validation logic can be added here
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // Handle form submission logic here
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          navigate("/");
          setErrorMessage({ firebase: errorMessage });
        });
    } else {
      // Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log("User signed in:", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          navigate("/");
          setErrorMessage({ firebase: errorMessage });
        });
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_large.jpg"
          alt="Netflix Logo"
        ></img>
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black
        my-36 mx-auto right-0 left-0
        text-white rounded-lg bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-2 w-full bg-gray-700"
        />
        {errorMessage?.email && (
          <p className="text-red-500 font-bold text-lg py-2">
            {errorMessage?.email}
          </p>
        )}
        <input
          type="text"
          placeholder="Password"
          ref={password}
          className="p-4 my-2 w-full bg-gray-700"
        />
        {errorMessage?.password && (
          <p className="text-red-500 font-bold text-lg py-2">
            {errorMessage?.password}
          </p>
        )}

        <button
          className="p-4 my-4 bg-red-700 
        w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {errorMessage?.firebase && (
          <p className="text-red-500 font-bold text-lg py-2">
            {errorMessage?.firebase}
          </p>
        )}

        <p>
          {isSignInForm ? "New to Netflix? " : "Already have an account? "}
          <span
            className="text-blue-600
            cursor-pointer"
            onClick={toggleSignUp}
          >
            {" "}
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
