import React from "react";
import './Home.css';

const Home = ()=> {
  return (
  <>
  <div className='spaceDiv'></div>
  <div className='main-box'>
   <h1>
Binary Search Tree Generator
   </h1>
      <h2>
      Use the links above to create your own binary tree, or view previously created trees.
      </h2>
      <p>All binary search trees are generated and displayed in JSON format. Each new tree is added to a PostgreSQL database. The Previous Trees link will fetch every binary search tree that has been created from the database for you to view.</p>
      </div>
    </>
  );
}

export default Home;