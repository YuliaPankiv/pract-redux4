import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
import { useGetCommentsQuery } from "../../redux/commentApi";

export const Comments = () => {
  const filter = useSelector(selectFilter);
  const { isError, isLoading, data: comments } = useGetCommentsQuery();
  const handleFilter = () => {
    return comments.filter((comment) =>
      comment.content.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  // if (!comments) {
  //   return;
  // }
  console.log(isLoading);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <Grid>
        {comments &&
          handleFilter().map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
      </Grid>
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
