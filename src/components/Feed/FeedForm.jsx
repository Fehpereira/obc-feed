import FeedInput from './FeedInput';
import useForm from '../../hooks/useForm';
import FeedComment from './FeedComment';

const FeedForm = ({ id }) => {
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
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FeedInput
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
