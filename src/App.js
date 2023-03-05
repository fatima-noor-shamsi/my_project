import React,{ useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  return (
    <center><div className="container my-5">
      <div className="card"><h1>My Counter app</h1></div>
 <h2>{count}</h2>
<button className="btn btn-success" onClick={() => setCount(count + 1)}>Count Increase</button>
<button className="btn btn-red" onClick={() => setCount(count - 1)}>Count decrease</button>
<button className="btn btn-reset" onClick={() => setCount(0)}>Reset</button>
    </div></center>
  );
}

export default App;



