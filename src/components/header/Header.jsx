import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode as decode } from "jwt-decode";
import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "/memories-logo.jpg";

import { LOGOUT } from "../../constants/action";

function Header({ user, setUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const signOut = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getDate()) {
        signOut();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="w-full h-24 max-sm:px-2 p-4">
      <div className="w-full h-full bg-blue-500 rounded-xl flex justify-between items-center max-sm:px-3 px-10">
        <div className="w-auto h-full flex justify-center items-center gap-4 max-sm:gap-2">
          <div className="w-12 h-12 max-sm:w-8 max-sm:h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="image logo"
              className="w-10 h-10 max-sm:w-8 max-sm:h-8"
            />
          </div>
          <Link
            to={"/"}
            className="text-3xl max-sm:text-xl text-white font-bold font-serif uppercase"
          >
            Memories
          </Link>
        </div>
        <div className="w-auto h-full flex items-center justify-center gap-4">
          {user ? (
            <>
              <h2 className="text-white text-xl font-semibold font-sans max-sm:hidden capitalize">
                {user.result.name}
              </h2>
              <button
                className="bg-red-600 text-blue-100 text-lg font-bold px-6 py-1 rounded-lg"
                onClick={signOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to={"/auth"}
              className="bg-green-600 text-blue-100 text-lg font-bold px-6 py-1 rounded-lg"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
