import { useState } from 'react';

const useForm = ({ formId }) => {
  const [emailValue, setEmailValue] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const [comments, setComments] = useState(() => {
    const storedComments = window.localStorage.getItem(`comments${formId}`);
    if (!storedComments) return [];
    return JSON.parse(storedComments);
  });

  const handleChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };

  const handleChangeComment = (event) => {
    setCommentValue(event.target.value);
  };

  const sendComment = (id) => {
    if (commentValue !== '' && emailValue !== '') {
      const now = new Date().toLocaleString();
      const commentData = {
        content: commentValue,
        email: emailValue,
        createdAt: now,
      };
      setComments((currentComments) => [...currentComments, commentData]);
      const commentDataSave = [...comments, commentData];
      window.localStorage.setItem(
        `comments${id}`,
        JSON.stringify(commentDataSave),
      );
      setCommentValue('');
      setEmailValue('');
    }
  };

  const removeComment = (commentToDelete) => {
    const newComments = comments.filter(
      (comment) => comment !== commentToDelete,
    );
    window.localStorage.setItem(
      `comments${formId}`,
      JSON.stringify(newComments),
    );
    setComments(newComments);
  };

  return {
    emailValue,
    commentValue,
    handleChangeEmail,
    handleChangeComment,
    sendComment,
    removeComment,
    comments,
  };
};

export default useForm;
