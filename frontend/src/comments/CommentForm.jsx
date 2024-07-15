import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* disable comment form if empty, check isTextareaDisabled for logic */}
        <button className="comment-form-button" disabled={isTextareaDisabled}>
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-button comment-form-cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default CommentForm;
