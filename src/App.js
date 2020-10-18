import React from "react";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className='container pt-3'>
      <h1>React | Redux | Saga</h1>
      <hr />
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Sync Posts</h2>
          <Posts posts={[]} />
        </div>
        <div className='col'>
          <h2>Async Posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
