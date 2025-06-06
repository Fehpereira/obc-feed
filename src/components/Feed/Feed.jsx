import FeedForm from './FeedForm';

const Feed = ({ id }) => {
  return (
    <section>
      <h1>Chat da galera!</h1>
      <FeedForm id={id} />
    </section>
  );
};

export default Feed;
