import "./Comments.css";
import CommentForm from "./CommentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"; // Example icons from FontAwesome

const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  updateComment,
  activeComment,
  addComment,
  setActiveComment,
  parentId = null,
}) => {
  // time passed since creation
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;

  // properties
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;

  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;

  const prevBody = comment.body;
  // console.log("body", comment.body);

  return (
    <div className="comment">
      <div className="comment-image-container">
        <img src="/user-icon.png" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div className="comment-date">{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <div className="edit-form-container">
            <CommentForm
              submitLabel={"Update"}
              hasCancelButton
              initialText={prevBody}
              handleSubmit={(text) => updateComment(text, comment.id)}
              handleCancel={() => setActiveComment(null)}
            />
          </div>
        )}

        {/* comment actions {reply, edit, delete} */}
        <div className="comment-actions">
          {canReply && (
            <div
              comment="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
              className="comment-action-icon"
            >
              <FontAwesomeIcon icon={faReply} />
            </div>
          )}
          {canEdit && (
            <div
              comment="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
              className="comment-action-icon"
            >
              <FontAwesomeIcon icon={faEdit} />
            </div>
          )}
          {canDelete && (
            <div
              comment="comment-action"
              onClick={() => deleteComment(comment.id)}
              className="comment-action-icon"
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          )}
        </div>
        <div className="reply-form-container">
          {isReplying && (
            <CommentForm
              submitLabel="Reply"
              hasCancelButton
              handleSubmit={(text) => addComment(text, replyId)}
              handleCancel={() => setActiveComment(null)}
            />
          )}
        </div>
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                replies={[]}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                updateComment={updateComment}
                addComment={addComment}
                parentId={comment.id}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
