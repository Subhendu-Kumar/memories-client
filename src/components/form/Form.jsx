import { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";

function Form({ setCurrentId, currentId }) {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      !postData.creator ||
      !postData.title ||
      !postData.tags ||
      !postData.selectedFile
    ) {
      alert("Please fill in all Required! fields");
      return;
    }
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <div className="w-[30%] h-auto p-2 max-sm:w-full">
      <form
        action=""
        onSubmit={handelSubmit}
        noValidate
        autoComplete="off"
        className="w-full h-auto bg-blue-300 p-4 rounded-xl flex flex-col gap-4 items-center justify-center"
      >
        <p className="w-full text-center leading-none font-semibold text-xl text-zinc-800">
          {currentId ? "Editing" : "Creating"} a Memory
        </p>
        <div className="w-full h-auto">
          <p className="text-sm font-semibold text-zinc-800">
            Creator:<span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="creator"
            label="Creator"
            className="w-full h-8 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
            placeholder="Enter creator name"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
            required
          />
        </div>
        <div className="w-full h-auto">
          <p className="text-sm font-semibold text-zinc-800">
            Title:<span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="title"
            label="Title"
            className="w-full h-8 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
            placeholder="Enter title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            required
          />
        </div>
        <div className="w-full h-auto">
          <p className="text-sm font-semibold text-zinc-800">Message:</p>
          <input
            type="text"
            name="message"
            label="Message"
            className="w-full h-8 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
            placeholder="Enter your message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </div>
        <div className="w-full h-auto">
          <p className="text-sm font-semibold text-zinc-800">
            Tags:<span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="tags"
            label="Tags"
            className="w-full h-8 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
            placeholder="Enter tags"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
            required
          />
        </div>
        <div className="w-full h-auto">
          <p className="text-sm font-semibold text-zinc-800">
            Image:<span className="text-red-600">*</span>
          </p>
          <FileBase
            type="file"
            multiple={false}
            required
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button
          className="w-full h-10 bg-blue-500 rounded-xl text-xl font-semibold text-zinc-300 leading-none"
          type="submit"
        >
          Submit
        </button>
        <button
          className="w-full h-10 bg-red-300 rounded-xl text-xl font-semibold text-zinc-600 leading-none"
          onClick={clear}
        >
          Clear
        </button>
      </form>
    </div>
  );
}

export default Form;
