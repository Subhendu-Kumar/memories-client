import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signup, signin } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);

  const handelshowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
    console.log(formData);
  };

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-auto px-14 pt-20 flex items-center justify-center">
      <div className="w-[30%] h-auto p-4 max-sm:w-full bg-blue-300 rounded-lg">
        <form
          action=""
          onSubmit={handelSubmit}
          noValidate
          autoComplete="off"
          className="w-full h-auto flex flex-col gap-4 items-center justify-center"
        >
          <p className="w-full text-center leading-none font-semibold text-xl text-zinc-800 uppercase underline">
            {isSignUp ? "Sign Up Form" : "Sign In Form"}
          </p>
          {isSignUp && (
            <div className="w-full h-auto flex justify-center items-center gap-2">
              <div className="w-[50%] h-auto flex flex-col items-start justify-center gap-1">
                <p className="text-sm font-semibold text-zinc-800">
                  First Name:<span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  name="firstName"
                  label="firstName"
                  className="w-full h-10 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
                  placeholder="First Name"
                  onChange={handelChange}
                  required
                />
              </div>
              <div className="w-[50%] h-auto flex flex-col items-start justify-center gap-1">
                <p className="text-sm font-semibold text-zinc-800">
                  Last Name:<span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  name="lastName"
                  label="lastName"
                  className="w-full h-10 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
                  placeholder="Last Name"
                  onChange={handelChange}
                  required
                />
              </div>
            </div>
          )}
          <div className="w-full h-auto flex flex-col items-start justify-center gap-1">
            <p className="text-sm font-semibold text-zinc-800">
              Email Address:<span className="text-red-600">*</span>
            </p>
            <input
              type="email"
              name="email"
              label="Email"
              className="w-full h-10 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
              placeholder="Enter Your Email"
              onChange={handelChange}
              required
            />
          </div>
          <div className="w-full h-auto flex flex-col items-start justify-center gap-1">
            <p className="text-sm font-semibold text-zinc-800">
              Password:<span className="text-red-600">*</span>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              className="w-full h-10 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
              placeholder="Enter Password"
              onChange={handelChange}
              required
            />
            <div
              className="w-full text-sm font-semibold text-zinc-800 text-right cursor-pointer"
              onClick={handelshowPassword}
            >
              {showPassword ? "Hide Password !" : "Show Password ?"}
            </div>
          </div>
          {isSignUp && (
            <div className="w-full h-auto flex flex-col items-start justify-center gap-1">
              <p className="text-sm font-semibold text-zinc-800">
                Confirm PassWord:<span className="text-red-600">*</span>
              </p>
              <input
                type="password"
                name="confirmPassword"
                label="Password"
                className="w-full h-10 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
                placeholder="Enter tags"
                onChange={handelChange}
                required
              />
            </div>
          )}
          <button
            className="w-full h-10 bg-blue-500 rounded-xl text-xl font-semibold text-zinc-300 leading-none"
            type="submit"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <button
          className="w-full h-8 bg-transparent rounded-xl text-base font-semibold text-zinc-800 leading-none mt-4"
          onClick={switchMode}
        >
          {isSignUp
            ? "Already have an Account? Sign In"
            : "Don,t Have an Account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
