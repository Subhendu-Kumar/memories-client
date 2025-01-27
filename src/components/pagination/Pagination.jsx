import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";

import { Link } from "react-router-dom";

const Paginate = ({ page }) => {
  const dispatch = useDispatch();
  const {numberOfPages} = useSelector((state) => state.posts)

useEffect(() => {
  if (page) {
    dispatch(getPosts(page))
  }
}, [page])

  return (
    <Stack spacing={1} className="bg-blue-200 p-2 px-1 rounded-lg w-full">
      <Pagination
        count={numberOfPages}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={Link}
            to={`/posts?page=${item.page}`}
          />
        )}
      />
    </Stack>
  );
};

export default Paginate;
