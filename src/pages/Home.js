import React from "react";
import './Home.css';

const Home = ()=> {
  return (
  <>
  <div className='main-box'>
   <h1>
What is a Binary Tree?
   </h1>
    </div>
    <div className="tree-box">
      <p> A binary tree is a type of tree data structure in which each node can have at most two child nodes, known as the left child and the right child. Each node of the tree consists of – data and pointers to the left and the right child.(geeksforgeeks.org)</p>
      <p>
      Use the links above to create your own binary tree, or view previous trees.
      </p>
      </div>
    </>
  );
}

export default Home;