import { Trash } from 'phosphor-react';

const FeedComment = ({ comments, eventToRemove }) => {
  if (comments.length <= 0)
    return <p>Seja o primeiro a mandar uma mensagem!</p>;

  return (
    <section className="commentWrapper">
      {comments.map((comment, index) => {
        return (
          <div key={`${comment.commentValue}${index}`}>
            <span>
              <strong style={{ marginRight: '.5rem' }}>{comment.email}</strong>
              <p style={{ margin: '.125rem 0', fontSize: '.75rem' }}>
                Enviado em: {comment.createdAt}
              </p>
            </span>
            <p className="comment">{comment.content}</p>
            <button
              onClick={() => {
                eventToRemove(comment);
              }}
            >
              <Trash size={16} />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default FeedComment;
