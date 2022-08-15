import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  // 1. React hooks state setup
  const [count, setCount] = useState(0);
  
  //2. increment count function
  const increment = () => {
    setCount(count + 1);
  };
  //3. decrement count function
  const decrement = () => {
    setCount(count - 1);
  };
  //callback function passed to useEffect
  useEffect(() => {
    const faviconUpdate = async () => {
      //grab favicon element by ID
      const favicon = document.getElementById("favicon");
      //check count value, if below 0 we change href property to our red circle image path
      if (count < 0) {
        favicon.href = "redcircle.png";
        console.log(favicon);
      }
      //if above 0, we set back to green
      else {
        favicon.href = "greencircle.png";
      }
    };
    //run our function here
    faviconUpdate();
    
    //2nd paramenter passed to useEffect is dependency array so that this effect only runs on changes to count
  }, [count]);
  //4. html
  return (
    <div className="container-fluid">
      <h1>Dynamic Favicon Tutorial</h1>
    //JSX syntax to display our current count value
      <h2>{count}</h2>
    //onclick handler to run our increment/decrement functions when we click the buttons
      <button className="btn btn-success" onClick={increment}>
        increase
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        decrease
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);