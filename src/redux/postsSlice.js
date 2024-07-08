import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
  },
});

export const { addPost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
