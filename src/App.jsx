import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/postDetails/PostDetails";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <Router>
      <div className="w-full min-h-screen bg-blue-50">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path={"/"} element={<Navigate to="/posts" />} />
          <Route
            path={"/posts"}
            element={<Home user={user} setUser={setUser} />}
          />
          <Route
            path={"/posts/search"}
            element={<Home user={user} setUser={setUser} />}
          />
          <Route path={"/posts/:id"} element={<PostDetails />} />
          <Route
            path={"/auth"}
            element={!user ? <Auth /> : <Navigate to={"/posts"} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
