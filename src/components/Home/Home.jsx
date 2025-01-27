import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { MuiChipsInput } from "mui-chips-input";

import { getPosts, getPostBySearch } from "../../actions/posts";
import Posts from "../posts/Posts";
import Form from "../form/Form";
import Paginate from "../pagination/Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ user }) => {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handelKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handelAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handelDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div className="w-full h-auto flex flex-col-reverse lg:flex-row max-sm:px-2 justify-evenly items-center lg:items-start gap-4 p-4 px-10">
      <Posts setCurrentId={setCurrentId} user={user} />
      <div className="lg:w-[25%] w-[60%] h-auto max-sm:w-full flex-col flex items-center justify-center gap-4">
        <div className="w-full h-auto p-4 bg-blue-300 rounded-lg flex flex-col items-center justify-center gap-2">
          <div className="w-full h-auto flex flex-col justify-center items-start gap-2">
            <p className="text-sm font-semibold text-zinc-800">
              Search Memories:
            </p>
            <input
              type="text"
              name="search"
              label="search memories"
              className="w-full h-10 bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
              placeholder="Search....."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handelKeyDown}
            />
          </div>
          <MuiChipsInput
            className="w-full bg-blue-100 rounded-lg focus:outline-none focus:ring-0 p-2 text-zinc-600"
            value={tags}
            onAddChip={handelAdd}
            onDeleteChip={handelDelete}
            placeholder="Search by tags....."
          />
          <button
            className="w-full h-auto bg-green-500 text-base font-semibold py-1 rounded-lg text-center text-zinc-200"
            onClick={searchPost}
          >
            Search
          </button>
        </div>
        {!searchQuery && !tags.length && <Paginate page={page} />}
        <Form currentId={currentId} setCurrentId={setCurrentId} user={user} />
      </div>
    </div>
  );
};

export default Home;
