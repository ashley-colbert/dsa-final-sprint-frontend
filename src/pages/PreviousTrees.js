import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './PreviousTrees.css';

const PreviousTrees = () => {
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/binary/alltrees');
        setTrees(response.data);
      } catch (err) {
        setError('Error fetching trees');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrees();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <div className='spaceDiv' ></div>
    <div className='jsonBoxAll' >
      <h2>Previous Binary Trees</h2>
      {trees.length > 0 ? (
        trees.map((tree, index) => (
          <div key={index}>
            <h3>Tree {index + 1}</h3>
            <pre>{JSON.stringify(JSON.parse(tree.jsonRepresentation), null, 2)}</pre>
          </div>
        ))
      ) : (
        <p>No trees available.</p>
      )}
    </div>
  </>
  );
};

export default PreviousTrees;