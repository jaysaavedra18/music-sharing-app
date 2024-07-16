import { useEffect, useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "./comments-api.js";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ currentUserId, postId }) => {
  // states
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  const rootComments = backendComments
    .filter((backendComment) => backendComment.parentId === null)
    .sort((a, b) => {
      // Sort by createdAt in descending order
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  // Function to get replies from API
  const getReplies = (commentId) => {
    // Filter backendComments array to find comments with matching parentId
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        // Sort our replies in ascending order
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  const addComment = (text, parentId = null) => {
    console.log("addComment: ", text, parentId);
    // console.log("event e: ", e);
    createCommentApi(text, parentId, postId).then((comment) => {
      console.log(comment);
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi(commentId).then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };
  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    getCommentsApi(postId).then((data) => {
      setBackendComments(data);
      backendComments.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      // console.log("data", data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      {/* <div className="comment-form-title">Write comment</div> */}
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            updateComment={updateComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
