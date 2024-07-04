import moment from "moment";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Post({ post, setCurrentId }) {
  return (
    <div className="w-[32%] h-96 shadow-xl bg-purple-100 rounded-xl flex flex-col justify-between items-center gap-2 overflow-hidden pb-6">
      <div className="w-full h-[50%] bg-green-200 overflow-hidden relative">
        <img
          src={post.selectedFile}
          alt="image"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute w-full h-10 bg-transparent z-10 flex justify-between items-center top-3 left-0 px-6">
          <div className="w-auto h-auto flex flex-col items-start justify-cente gap-1">
            <h2 className="text-white font-semibold text-lg capitalize leading-none">
              {post.creator}
            </h2>
            <p className="text-white font-semibold text-xs leading-none">
              {moment(post.createdAt).fromNow()}
            </p>
          </div>
          <div className="w-[40%] h-auto flex items-center justify-end">
            <button className="text-white text-2xl" onClick={() => setCurrentId(post._id)}>
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto pl-6 pt-1 pr-2 text-zinc-500 text-sm leading-none font-medium">
        {post.tags.map((tag) => `#${tag} `)}
      </div>
      <div className="w-full h-auto pl-6 pt-1 pr-2 text-zinc-800 text-xl font-semibold leading-none capitalize">
        {post.title}
      </div>
      <div className="w-full h-auto pl-6 pt-1 pr-2 text-zinc-600 text-xs font-semibold leading-none">
        {post.message}
      </div>
      <div className="w-full h-auto px-6 pt-3 flex items-center justify-between">
        <button className="text-blue-500 flex" onClick={() => {}}>
          <FaThumbsUp />
          <span className="leading-none text-base font-semibold">
            &nbsp;&nbsp;{post.likeCount}
          </span>
        </button>
        <button className="text-red-500 flex" onClick={() => {}}>
          <MdDelete />
          <span className="leading-none text-base font-semibold">
            &nbsp;Delete
          </span>
        </button>
      </div>
    </div>
  );
}

export default Post;
