import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";

import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="w-full min-h-screen bg-blue-100">
      <Header />
      <div className="w-full h-auto flex justify-evenly items-start gap-4 border-2 border-red-500 px-20 p-4">
        <Posts setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
}

export default App;
