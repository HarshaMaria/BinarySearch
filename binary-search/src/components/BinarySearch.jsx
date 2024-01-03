import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setresult,settarget,setInputArray,setleft,setright } from '../reducers/binarySearchSlice';

const BinarySearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [executionTime, setExecutionTime] = useState(null);
  const result = useSelector((state) => state.binary.result);
  const dispatch=useDispatch()

  const handleChange=(e)=>{
  const value=e.target.value.split(',').map(Number)
  setArray(value)
  dispatch(setInputArray(value))
 }

  const binarySearch = async () => {
    const startTime = performance.now(); 
    let left = 0;
    dispatch(setleft(left))
    let right = array.length - 1;
    dispatch(setright(right))

    while (left <= right) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      const mid = Math.floor((left + right) / 2);
      
      if (array[mid] === target) {
        dispatch(setleft(mid));
        dispatch(setright(mid));
        dispatch(setresult(mid))
        const endTime = performance.now(); 
        setExecutionTime(endTime - startTime); 
        return;
      } else if (array[mid] < target) {
        left = mid + 1;
        
        dispatch(setleft(left))
      } else {
        right = mid - 1;
        dispatch(setright(right))
      }
    }

    dispatch(setresult(-1))
    const endTime = performance.now(); 
    setExecutionTime(endTime - startTime); 
  };

  return (
     <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
       <h1 style={{ marginBottom: '20px' }}>Binary Search App</h1>
       <div style={{ marginBottom: '2px' }}>
        <label>Enter the array:- </label>
         <input type='text' onChange={handleChange}
           style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid', }} />
       </div>
      <div>
        <label>
         Enter Key to Search:- 
          <input type="text" value={target} onChange={(e) => {setTarget(Number(e.target.value))
            dispatch(settarget(target))}}
            style={{ marginTop: '4px', marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid', }} />
        </label>
      </div>
      <div style={{ marginTop: '6px', marginLeft: '48px' }}><button onClick={binarySearch}>Search</button></div>
      {result !== null && (
        <p>
          {result !== -1
            ? `Key found at index ${result}`
            : 'Key not found in the array'}
        </p>
      )}
      {executionTime !== null && <p>Execution Time: {executionTime.toFixed(2)} milliseconds</p>}
    </div>
  );
};

export default BinarySearch;