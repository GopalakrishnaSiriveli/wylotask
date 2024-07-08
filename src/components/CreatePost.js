import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../redux/postsSlice';
import { useNavigate } from 'react-router-dom';
import './button.css'

const CreatePost = ({ editingPost, setEditingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      dispatch(updatePost({ id: editingPost.id, title, content }));
      setEditingPost(null);
    } else {
      dispatch(addPost({ id: Date.now(), title, content }));
    }
    navigate('/');
  };

  return (
    <div className='main'>
      <h2 className='heading'>{editingPost ? 'Edit Post' : 'Welcome To Create Post App...!'}</h2>
      <form onSubmit={handleSubmit}>
        <div className='card'>
          <label className='title'>Title    </label>
          <input
            className='input'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='card'>
          <label className='title1'>Content</label>
          <textarea
            className='input'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button className='button1' type="submit">{editingPost ? 'Update' : 'Create'}</button>
      </form>
      <button  className='button' onClick={() => navigate('/')}>Go to Posts</button>
    </div>
  );
};

export default CreatePost;
