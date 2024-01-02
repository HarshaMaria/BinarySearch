// import React, { useState, useEffect } from 'react';

// const Visualization = ({ array, searchSteps }) => {
//   const [highlightedElements, setHighlightedElements] = useState([]);

//   useEffect(() => {
//     if (Array.isArray(array) && array.length > 0) {
//       const elements = new Array(array.length).fill(false);
//       setHighlightedElements(elements);
//     }
//   }, [array]);

//   const renderArray = () => {
//     if (!array || array.length === 0) {
//       return null;
//     }

//     const arrayElements = array.split(',').map((num, index) => {
//       const isHighlighted = highlightedElements[index];
//       const isMid = isHighlighted && num.trim() === 'true'; // Change 'true' to your middle element condition

//       return (
//         <div
//           key={index}
//           style={{
//             margin: '5px',
//             padding: '8px',
//             border: '1px solid #ccc',
//             borderRadius: '3px',
//             background: isMid ? 'blue' : isHighlighted ? 'green' : '#f5f5f5',
//             minWidth: '40px',
//             textAlign: 'center',
//             flex: '1 0 calc(8.33% - 20px)',
//           }}
//         >
//           {num.trim()}
//         </div>
//       );
//     });

//     return (
//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           marginTop: '20px',
//           justifyContent: 'center',
//           maxWidth: '90%',
//           margin: 'auto',
//         }}
//       >
//         {arrayElements}
//       </div>
//     );
//   };

//   useEffect(() => {
//     if (searchSteps && searchSteps.length > 0) {
//       const timer = setInterval(() => {
//         const updatedHighlightedElements = [...highlightedElements];
//         const step = searchSteps.shift();
//         if (step) {
//           const { start, end, mid } = step;
//           const midIndex = Math.floor((start + end) / 2);
//           updatedHighlightedElements[midIndex] = true;

//           for (let i = start; i <= end; i++) {
//             if (i !== midIndex) {
//               updatedHighlightedElements[i] = false;
//             }
//           }

//           setHighlightedElements([...updatedHighlightedElements]);
//         } else {
//           clearInterval(timer);
//         }
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [searchSteps, highlightedElements]);

//   return (
//     <div style={{ marginTop: '30px', textAlign: 'center' }}>
//       {array && (
//         <div>
//           <h2>Search Visualization</h2>
//           {renderArray()}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Visualization;





import React, { useState, useEffect } from 'react';

const Visualization = ({ array, searchSteps }) => {
  const [highlightedElements, setHighlightedElements] = useState([]);

  useEffect(() => {
    if (Array.isArray(array) && array.length > 0) {
      const elements = new Array(array.length).fill(false);
      setHighlightedElements(elements);
    }
  }, [array]);

  const renderArray = () => {
    if (!array || array.length === 0) {
      return null;
    }

    const arrayElements = array.split(',').map((num, index) => {
      const isHighlighted = highlightedElements[index];
      const isMid = index === highlightedElements.length / 2; // You should specify your mid element condition here

      return (
        <div
          key={index}
          style={{
            margin: '5px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            background: isMid ? 'blue' : isHighlighted ? 'green' : '#f5f5f5',
            minWidth: '40px',
            textAlign: 'center',
            flex: '1 0 calc(8.33% - 20px)',
          }}
        >
          {num.trim()}
        </div>
      );
    });

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '20px',
          justifyContent: 'center',
          maxWidth: '90%',
          margin: 'auto',
        }}
      >
        {arrayElements}
      </div>
    );
  };

  useEffect(() => {
    if (searchSteps && searchSteps.length > 0) {
      const timer = setInterval(() => {
        const updatedHighlightedElements = new Array(array.length).fill(false);
        const step = searchSteps.shift();
        if (step) {
          const { start, end } = step;
          const midIndex = Math.floor((start + end) / 2);
          if (start === end) {
            updatedHighlightedElements[midIndex] = true;
          } else {
            for (let i = start; i <= end; i++) {
              updatedHighlightedElements[i] = true;
            }
          }
          setHighlightedElements([...updatedHighlightedElements]);
        } else {
          clearInterval(timer);
        }
      }, 500);
      return () => clearInterval(timer);
    }
  }, [searchSteps, array?.length]);
  
  return (
    <div style={{ marginTop: '30px', textAlign: 'center' }}>
      {array && (
        <div>
          <h2>Search Visualization</h2>
          {renderArray()}
        </div>
      )}
    </div>
  );
};

export default Visualization;
