import { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { getPost } from "../../actions/posts";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  return (
    <div className="w-full h-auto p-4 px-8 border border-red-600">
      <div className="w-full h-auto flex justify-between p-6 px-8 bg-green-50 shadow-xl rounded-xl overflow-hidden">
        <div className="w-[53%] h-auto p-2 flex flex-col items-start gap-2">
          <div className="text-4xl font-semibold text-zinc-500 capitalize">
            {post.title}
          </div>
          <div className="text-sm font-medium text-blue-500">
            {/* {post.tags.map((tag) => `#${tag} `)} */}
          </div>
          <div className="text-sm font-normal text-zinc-600 p-2 px-4">
            {post.message}
          </div>
          <div className="text-xl font-semibold text-zinc-500">
            Created By: {post.name}
          </div>
          <div className="text-xs font-normal text-zinc-600 leading-none">
            {moment(post.createdAt).fromNow()}
          </div>
          <div className="border-t-2 w-full border-zinc-200" />
          <div className="text-lg font-bold text-zinc-600 py-1">
            Realtime Chat - Comming Soon
          </div>
          <div className="border-t-2 w-full border-zinc-200" />
          <div className="text-lg font-bold text-zinc-600 py-1">
            Commments - Comming Soon
          </div>
          <div className="border-t-2 w-full border-zinc-200" />
        </div>
        <div className="w-[45%] h-auto rounded-xl overflow-hidden bg-red-500 shadow-2xl">
          <img
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
            className="h-96 w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

// {moment(post.createdAt).fromNow()}
