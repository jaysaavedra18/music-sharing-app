import { useState } from "react";
import "./Comments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"; // Example icon, replace with your desired icon

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
  isEditingReplying = false,
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.trim().length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  // console.log(text);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="comment-form-wrapper">
          <textarea
            className="comment-form-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* disable comment form if empty, check isTextareaDisabled for logic */}
          <div className="button-container">
            <button
              className="comment-form-button"
              disabled={isTextareaDisabled}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            {hasCancelButton && isTextareaDisabled && (
              <button
                type="button"
                className="comment-form-button comment-form-cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
