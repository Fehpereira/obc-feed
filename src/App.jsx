import React from 'react';
import Feed from './components/Feed/Feed';

const App = () => {
  const [feedList, setFeedList] = React.useState(() => {
    const feedStored = window.localStorage.getItem('feeds');
    if (!feedStored) return [];
    return JSON.parse(feedStored);
  });

  React.useEffect(() => {
    window.localStorage.setItem('feeds', JSON.stringify(feedList));
  }, [feedList]);

  const handleNewFeedClick = () => {
    if (feedList.length) {
      setFeedList([...feedList, feedList.length + 1]);
    } else {
      setFeedList([1]);
    }
  };

  return (
    <div>
      <button onClick={handleNewFeedClick}>Criar um novo chat</button>
      {feedList.length ? (
        feedList.map((feed) => {
          return <Feed key={feed} id={feed} />;
        })
      ) : (
        <h2>Nenhum Chat Disponível</h2>
      )}
    </div>
  );
};

export default App;
