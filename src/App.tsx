import './App.css';

function App() {
  return (
    <div className="App">
        <div className="wrapper">
          <div className="container">
            <textarea id="input-text-area" rows={12} placeholder='Start Typing here...'></textarea>
          </div>
          <div className="count">
            <div className="">
              <h5>0</h5>
              <p>Words</p>
            </div>
            <div className="">
              <h5>0</h5>
              <p>Characters</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
