import { MouseTracker } from './components/MouseTracker/MouseTracker';

const App = () => (
  <MouseTracker
    render={({ x, y }) => (
      <h1>
        The mouse position is ({x}, {y})
      </h1>
    )}
  />
);

export default App;