import React from 'react';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <Chart min={0.01} max={2.46} delta={0.01}/>
    </div>
  );
}

export default App;