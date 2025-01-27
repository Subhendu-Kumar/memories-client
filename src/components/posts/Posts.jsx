import { useSelector } from "react-redux";

import Post from "./post/Post";

import spinner from "/spinner.svg";

function Posts({ setCurrentId, user }) {
  const { posts, isLoading } = useSelector((state) => state.posts);

if (!posts.length && !isLoading) {
  return "No posts"
}

  return (
    <div className="lg:w-[75%] w-full h-auto">
      <div
        className={`grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 `}
      >
        {isLoading ? (
          <img src={spinner} className="w-14 h-14" />
        ) : (
          posts?.map((post, index) => {
            return (
              <Post
                key={index}
                post={post}
                setCurrentId={setCurrentId}
                user={user}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Posts;
