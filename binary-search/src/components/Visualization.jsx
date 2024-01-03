import React from 'react';
import { useSelector } from 'react-redux';

const Visualization = () => {
  const array = useSelector((state) => state.binary.array);
  const left = useSelector((state) => state.binary.left);
  const right = useSelector((state) => state.binary.right);

  return (
    <div style={{ marginTop: '24px', textAlign: 'center'}}>
      <h2> Search Visualization</h2>
      <div
        style={{ display: 'flex', justifyContent: 'center', width: '100%', flexWrap: 'wrap', }}>
        {array?.map((num, index) => (
          <div
            key={index}
            className={`${index < left || index > right ? 'inactive' : ''}`}
            style={{ border: '1px solid #ddd', padding: '10px', margin: '2px', backgroundColor: 'gray', borderRadius: '4px',
              opacity: `${index < left || index > right ? '0.5' : '1'}`,}}>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visualization;