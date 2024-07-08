import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';


const App = () => {
  const [editingPost, setEditingPost] = useState(null);

  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          
          <Route exact path="/" element={<PostsDisplay setEditingPost={setEditingPost} />} />
          <Route path="/create" element={<CreatePost editingPost={null} setEditingPost={setEditingPost} />} />
          <Route path="/edit" element={<CreatePost editingPost={editingPost} setEditingPost={setEditingPost} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
