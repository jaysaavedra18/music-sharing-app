import React from "react";
import "../styles/Comment.css";

function Comment({ comment, onDelete }) {
  const formattedDate = new Date(comment.created_at).toLocaleDateString(
    "en-US"
  );

  return (
    <div className="comment-container">
      <p className="comment-content">{comment.content}</p>
      <p className="comment-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(comment.id)}>
        Delete
      </button>
    </div>
  );
}

export default Comment;
