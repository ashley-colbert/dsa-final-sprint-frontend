import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Input.css';

const Input = () => {
  const [numbers, setNumbers] = useState('');
  const [treeJson, setTreeJson] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numberList = numbers.split(',').map(Number);
    try {
      const response = await axios.post('http://localhost:8080/binary/tree', numberList);
      setTreeJson(response.data);
      navigate('/process-numbers', { state: { treeJson: response.data } });
    } catch (error) {
      console.error('Error building tree:', error);
    }
  };

  return (
    <div className='formBox'>
      <form onSubmit={handleSubmit}>
        <h2>Enter numbers</h2>
        <p className='smallText' >Enter a list of numbers separated by commas to build a binary search tree.</p>
        <input
          className='inputBox'
          type='text'
          placeholder='Enter Numbers'
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
        <button type="submit" className='submit'>Build Tree</button>
      </form>
    </div>
  );
};

export default Input;