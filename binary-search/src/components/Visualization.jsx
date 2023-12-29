import React from 'react';

const Visualization = ({ array, searchSteps }) => {
  const renderArray = () => {
    if (!array || array.length === 0) {
      return null;
    }

    const arrayElements = array.split(',').map((num, index) => (
      <div
        key={index}
        style={{
          margin: '5px',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '3px',
          background: '#f5f5f5',
          minWidth: '40px',
          textAlign: 'center',
          flex: '1 0 calc(8.33% - 20px)',
        }}
      >
        {num.trim()}
      </div>
    ));

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

  const renderSearchSteps = () => {
    if (!searchSteps || searchSteps.length === 0) {
      return null;
    }

    const steps = searchSteps.map((step, index) => (
      <div key={index} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <div style={{ backgroundColor: 'blue', padding: '8px', borderRadius: '5px', color: 'white', marginBottom: '5px' }}>
            <p><strong>Start</strong></p>
            <p>{step.start}</p>
          </div>
        </div>
        <div style={{ flex: '1', textAlign: 'center', margin: '0 5px' }}>
          <div style={{ backgroundColor: 'red', padding: '8px', borderRadius: '5px', color: 'white', marginBottom: '5px' }}>
            <p><strong>Mid</strong></p>
            <p>{step.mid}</p>
          </div>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <div style={{ backgroundColor: 'blue', padding: '8px', borderRadius: '5px', color: 'white', marginBottom: '5px' }}>
            <p><strong>End</strong></p>
            <p>{step.end}</p>
          </div>
        </div>
      </div>
    ));

    return (
      <div style={{ marginTop: '20px', maxWidth: '80%', margin: 'auto' }}>
        <h2>Search Steps</h2>
        {steps}
      </div>
    );
  };

  return (
    <div style={{ marginTop: '30px', textAlign: 'center' }}>
      {array && (
        <div>
          <h2>Search Visualization</h2>
          {renderArray()}
        </div>
      )}
      {renderSearchSteps()}
    </div>
  );
};

export default Visualization;