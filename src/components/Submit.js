import React from 'react';
import './Submit.css';

function Submit() {
  const handleClick = () => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  return (
    <>
      <button className="submit" type="submit" onClick={handleClick}>Submit</button>
    </>
  );
};
export default Submit;