import React, { useState } from 'react';

function BarComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        style={{ width: '100%', scale: '1', marginTop: '20px', backgroundColor:'gray' }}
      />
      
      <p style={{ marginTop: '10px' }}>Value: {value}</p>
    </div>
  );
}

export default BarComponent;
