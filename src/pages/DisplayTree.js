import React from 'react';
import { useLocation } from 'react-router-dom';
import './DisplayTree.css';

const DisplayTree = ()=> {
  const location = useLocation();
  const { treeJson } = location.state || {};

  return (
    <>
    <div className='spaceDiv' ></div>
    <div className='jsonBox'>
      <h2>Your Binary Tree</h2>
      {treeJson ? (
        <pre>{JSON.stringify(treeJson, null, 2)}</pre>
      ) : (
        <p>No tree data available.</p>
      )}
    </div>
  </>
  );
};


export default DisplayTree;