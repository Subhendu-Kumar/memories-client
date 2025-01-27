import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { MdEdit } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { deletePost, likePost } from "../../../actions/posts";

function Post({ post, setCurrentId, user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };

  return (
    <div className="w-full h-96 shadow-xl bg-purple-100 rounded-xl flex flex-col justify-between items-center gap-2 overflow-hidden pb-6 max-sm:w-full">
      <div className="w-full h-[50%] bg-green-200 overflow-hidden relative">
        <img
          src={post.selectedFile}
          alt="image"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute w-full h-10 bg-transparent z-10 flex justify-between items-center top-3 left-0 px-6">
          <div className="w-auto h-auto flex flex-col items-start justify-cente gap-1">
            <h2 className="text-white font-semibold text-lg capitalize leading-none">
              {post.name}
            </h2>
            <p className="text-white font-semibold text-xs leading-none">
              {moment(post.createdAt).fromNow()}
            </p>
          </div>
          <div className="w-[40%] h-auto flex items-center justify-end">
            {user?.result?._id === post?.creator && (
              <button
                className="text-white text-2xl"
                onClick={() => setCurrentId(post._id)}
              >
                <MdEdit />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-auto pl-6 pt-1 pr-2 text-zinc-500 text-sm leading-none font-medium">
        {post.tags.map((tag) => `#${tag} `)}
      </div>
      <button
        className="w-full h-auto flex flex-col justify-center items-start gap-2 text-left"
        onClick={openPost}
      >
        <div className="w-full h-auto pl-6 pt-1 pr-2 text-zinc-800 text-xl font-semibold leading-none capitalize">
          {post.title}
        </div>
        <div className="w-full h-auto pl-6 pt-1 pr-2 text-zinc-600 text-xs font-semibold leading-none line-clamp-4">
          {post.message}
        </div>
      </button>
      <div className="w-full h-auto px-6 pt-3 flex items-center justify-between">
        <button
          disabled={!user?.result}
          className={`flex ${
            !user?.result ? "text-zinc-400" : "text-blue-500"
          }`}
          onClick={() => dispatch(likePost(post._id))}
        >
          <FaThumbsUp />
          <span className="leading-none text-base font-semibold">
            &nbsp;&nbsp;{post.likes.length}
          </span>
        </button>
        {user?.result?._id === post?.creator && (
          <button
            className="text-red-500 flex"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <MdDelete />
            <span className="leading-none text-base font-semibold">
              &nbsp;Delete
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Post;
