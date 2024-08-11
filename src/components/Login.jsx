import React, { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt=""
        />
      </div>
      <form
        action=""
        className="absolute bg-black p-5 w-3/12   transition-transform transform hover:scale-110 hover:shadow-2xl my-36 mx-auto right-0 left-0 bg-opacity-80 shadow"
      >
        <h1 className="text-white text-2xl font-bold mb-5 mx-9">
          {isSignUpForm ? `Sign In` : `Sign Up`}
        </h1>
        {isSignUpForm || (
          <input
            className="w-[80%] mx-auto mb-8 block h-[45px] rounded-lg placeholder-gray-400 pl-4"
            type="email"
            placeholder="Name"
          />
        )}
        <input
          className="w-[80%] mx-auto mb-8 block h-[45px] rounded-lg placeholder-gray-400 pl-4"
          type="email"
          placeholder="Email Address"
        />

        {isSignUpForm || (
          <input
            className="w-[80%] mx-auto mb-8 block h-[45px] rounded-lg placeholder-gray-400 pl-4"
            type="email"
            placeholder="Contact Number"
          />
        )}

        <input
          className="w-[80%] mx-auto mb-8 block h-[45px] rounded-lg placeholder-gray-400 pl-4"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-600 w-[80%] mx-auto mb-8 block h-[45px]">
          {isSignUpForm ? `Log In` : `Sign Up`}
        </button>
        {isSignUpForm ? (
          <h1 className="text-white mx-9">
            New user?{" "}
            <span onClick={() => setIsSignUpForm(!isSignUpForm)}>Sign Up</span>
          </h1>
        ) : (
          <h1 className="text-white mx-9">
            Existing user?{" "}
            <span onClick={() => setIsSignUpForm(!isSignUpForm)}>Log In</span>
          </h1>
        )}
      </form>
    </div>
  );
}
