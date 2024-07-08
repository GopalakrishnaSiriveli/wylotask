import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import { useNavigate } from 'react-router-dom';
import './button.css'

const PostsDisplay = ({ setEditingPost }) => {
  const posts = useSelector((state) => state.posts.posts);
  const navigate = useNavigate();

  const handleEdit = (post) => {
    setEditingPost(post);
    navigate('/edit');
  };

  return (
    <div className='post-container'>
      <h2 className='name'>Your Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onEdit={handleEdit} />
      ))}
      <button className='button' onClick={() => navigate('/create')}>Create Post</button>
    </div>
  );
};

export default PostsDisplay;
