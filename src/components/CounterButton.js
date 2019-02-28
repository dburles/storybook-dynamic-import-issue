import React, { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Pressed {count} times</button>
  );
}

import('../math').then(math => {
  console.log(math.add(16, 26));
});

export default CounterButton;
