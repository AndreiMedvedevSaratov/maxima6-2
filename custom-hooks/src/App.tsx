import React from 'react';
import { useMousePosition } from './hooks/useMousePosition';

const App: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <h1>
        The mouse position is ({x}, {y})
      </h1>
    </div>
  );
};

export default App;
