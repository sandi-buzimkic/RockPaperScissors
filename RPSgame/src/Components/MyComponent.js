// MyComponent.js
import { useState } from 'react';
function MyComponent() {
    const [count, setCount] = useState(0); // count is the current value; setCount updates it

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    );
  }
  
  export default MyComponent;