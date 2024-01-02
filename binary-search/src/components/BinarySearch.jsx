import React, { useState } from 'react';
import Visualization from './Visualization';

const BinarySearch = () => {
  const [array, setArray] = useState('');
  const [key, setKey] = useState();
  const [result, setResult] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);
  const [searchSteps, setSearchSteps] = useState([]);

  const binarySearch = (array, value) => {
    let start = 0;
    let end = array.length - 1;
    const steps = [];

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      steps.push({ start, end, mid });

      if (array[mid] === value) {
        start = mid;
        end = mid;
        steps.push({ start, end, mid });
        setSearchSteps(steps);
        return mid;
      } else if (array[mid] < value) {

        start = mid + 1;
        steps.push({ start, end, mid });

        setSearchSteps(steps);

      } else {  
        end = mid - 1;
        steps.push({ start, end, mid });

        setSearchSteps(steps);
      }
    }

    setSearchSteps(steps);
    return -1;
  };

  const handleChange = (event) => {
    setKey(parseInt(event.target.value));
  };

  const handleSearch = () => {
    const startTime = performance.now();
    const arr = array.split(',').map((num) => parseInt(num.trim(), 10));
    const index = binarySearch(arr, parseInt(key, 10));
    const endTime = performance.now();

    setResult(index);
    setElapsedTime((endTime - startTime).toFixed(3));
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Binary Search</h1>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor='array'>Enter the array: </label>
        <input type='text' id='array' value={array} onChange={(e) => setArray(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid', }} />
      </div>
      <label>
        Enter Key to Search:
        <input type='text' value={key} onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid', }} />
      </label>
      <button onClick={handleSearch}
        style={{ marginTop: '24px', marginLeft: '60px', padding: '8px 15px', borderRadius: '2px', border: 'none', }} >
        Search
      </button>
      {result !== null && (
        <p>
          {result !== -1
            ? `Key found at index ${result}`
            : 'Key not found in the array'}
        </p>
      )}
      {elapsedTime !== null && (
        <p style={{ marginTop: '10px' }}>
          Elapsed Time: {elapsedTime} milliseconds
        </p>
      )}
      <Visualization array={array} searchSteps={searchSteps} />
    </div>
  );
};

export default BinarySearch;
