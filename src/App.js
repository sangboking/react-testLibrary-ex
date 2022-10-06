import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  
  return (
    <div className="App">
      <h3 data-testid="counter">{count}</h3>
      <div>
        <button 
          data-testid="minus-button"
          disabled={disabled}
          onClick={() => {setCount(prev => prev-1)}}
        >
          -
        </button>

        <button 
          data-testid="plus-button"
          disabled={disabled}
          onClick={() => { setCount(prev => prev+1) }}
        >
          +
        </button>

        <div>
          <button 
            data-testid="on/off-button" 
            style={{backgroundColor:'blue'}}
            onClick={() => {setDisabled(!disabled) }}
          />
        </div>
        <div>
          안녕하세요 cicd 테스트
        </div>
      </div>
    </div>
  );
}

export default App;
