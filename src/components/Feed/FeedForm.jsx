import FeedInput from './FeedInput';
import useForm from '../../hooks/useForm';
import FeedComment from './FeedComment';
import { useRef } from 'react';

const FeedForm = ({ id }) => {
  const inputRef = useRef(null);

  const {
    emailValue,
    commentValue,
    handleChangeEmail,
    handleChangeComment,
    sendComment,
    comments,
    removeComment,
  } = useForm({ formId: id });

  function handleSubmit(event) {
    event.preventDefault();
    sendComment(id);
    inputRef.current.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FeedInput
          ref={inputRef}
          type="email"
          id="email"
          value={emailValue}
          onChange={handleChangeEmail}
          required
        />
        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          id="comment"
          onChange={handleChangeComment}
          value={commentValue}
          required
        />
        <button type="submit">Enviar comentário</button>
      </form>
      <hr />
      <FeedComment comments={comments} eventToRemove={removeComment} />
    </>
  );
};

export default FeedForm;
