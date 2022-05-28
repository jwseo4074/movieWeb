import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  
  const [keyword, setKeyword] = useState('123');
  const [counter, setCounter] = useState(0);
  
  function btnClickFunc () {
    setCounter( (counter) => counter + 1 );
  }

  function inputChangeFunc (event) {
    setKeyword(event.target.value);
  }

  console.log("hello");

  useEffect( 
    () => {
      console.log("hello i am useEffect ")
    } 
    , []);

  return (
    <div className="App">

      <div>
        Counter : {counter}
        <button onClick={btnClickFunc}>Click !! </button>
      </div>

      <hr></hr>

      <div>
        keyword : {keyword}
      </div>
      
      <input
        value = {keyword}
        type = "text"
        onChange={inputChangeFunc}
        placeholder = "Here! "
      />
    </div>
  );
}

export default App;
