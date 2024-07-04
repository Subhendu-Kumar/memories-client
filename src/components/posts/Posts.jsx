import Post from "./post/Post";
import spinner from "/spinner.svg";
import { useSelector } from "react-redux";

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="w-[70%] h-auto border-2 border-green-400 p-2">
      <div
        className={`flex items-center gap-4 flex-wrap ${
          !posts.length ? "justify-center" : "justify-start"
        }`}
      >
        {!posts.length ? (
          <img src={spinner} className="w-14 h-14" />
        ) : (
          posts.map((post, index) => {
            return <Post key={index} post={post} setCurrentId={setCurrentId}/>;
          })
        )}
      </div>
    </div>
  );
}

export default Posts;
