import React from 'react';
import './button.css'

const PostItem = ({ post, onEdit }) => {
  return (
    <div className='post'>
      <h2 className='name'>{post.title}</h2>
      <p className='name'>{post.content}</p>
      <button className='button2' onClick={() => onEdit(post)}>Edit</button>
    </div>
  );
};

export default PostItem;
